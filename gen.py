#!/usr/bin/env python3
# -*- coding: utf-8 -*-"

# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from optparse import OptionParser
from pathlib import Path
import os
import math
import random

#=============================================================================

ROOT_AXIOM = 'A'

#=============================================================================


class Options(object):
  def __init__(self):
    self.setup_option_parser()
    self.parse_options()
    self.validate_options()

  def setup_option_parser(self):
    self.parser = OptionParser("usage: %prog")
    self.parser.add_option("-d",
                           "--depth",
                           type="int",
                           default=4,
                           help="Specifies the module tree depth, default=4")
    self.parser.add_option(
        "-b",
        "--branches",
        type="int",
        default=10,
        help="Specifies the module tree width at each level, default=10")
    self.parser.add_option(
        "--rules",
        default=None,
        help="Specifies l_system (for instance 'A:AB,B:BBB') rules to "
        "generate the inclusion. "
        "By default the script auto-generates a balanced tree."
        "The start axiom is always 'A'."
        "The rule expansion happens DEPTH times.")
    self.parser.add_option(
        "--sizes",
        default=None,
        help="Specify a size for each module, for instance 'A:10K,B:1.4M'"
        "This is the generated module payload and does not include "
        "module setup and import code for now.")

  def parse_options(self):
    (self.options, args) = self.parser.parse_args()

  def validate_options(self):
    if self.options.depth < 0:
      self.parser.error("--depth has to be >= 0")
    if self.options.branches <= 0:
      self.parser.error("--branches has to be >= 1")

    if self.options.rules is None:
      self.options.rules = "A:" + "A" * self.options.branches
    self.parse_rules()

    self.parse_sizes()

  def parse_rules(self):
    rules = dict()
    for rule in self.options.rules.split(','):
      predecessor, successors = rule.split(':')
      if len(predecessor) != 1:
        self.parser.error(
            f"Invalid rule '{rule}'': only 1 char predecessor allowed")
      if len(successors) == 0:
        self.parser.error(f"Invalid rule '{rule}': successor not specified")
      if predecessor in rules:
        self.parser.error(f"More than one rule for '{predecessor}")
      rules[predecessor] = successors
    if 'A' not in rules:
      self.parser.error("Missing rule for initial axiom 'A'")
    print("RULES: ", rules)
    self.options.rules = rules

  def parse_sizes(self):
    input_sizes = self.options.sizes
    sizes = self.options.sizes = dict()
    if input_sizes is None:
      return
    for input in input_sizes.split(','):
      symbol, size_string = input.split(':')
      size_string = size_string.lower()
      if size_string.endswith('k'):
        size = int(size_string[:-1]) * 1024
      elif size_string.endswith('m'):
        size = int(size_string[:-1]) * 1024 * 1024
      else:
        size = int(size_string) * 1024
      if symbol in sizes:
        self.parser.error(f"Duplicate size for {symbol}")
      sizes[symbol] = size


#=============================================================================


class Module(object):
  def __init__(self, name, parent, depth, index=0, size=0):
    self.children = []
    self.simple_name = name
    self.parent = parent
    self.depth = depth
    self.index = index
    self.size = size
    if parent:
      # Create unique name based on full path
      path = self.parent.submodule_path / name
      self.name = str(path).replace("/", "_")
      self.path = self.parent.submodule_path / (self.name + ".mjs")
    else:
      self.name = self.simple_name
      self.path = Path(self.name + ".mjs")
    self.submodule_path = self.path.parent / self.simple_name

  def append(self, module):
    self.children.append(module)

  def has_children(self):
    return len(self.children) > 0

  def expand_recurse(self, symbol, options, accumulator):
    if self.depth == options.depth:
      return
    if symbol not in options.rules:
      return
    expansion = options.rules[symbol]
    index = 0
    for symbol in expansion:
      name = f"{symbol}{index}"
      module = Module(name,
                      parent=self,
                      depth=self.depth + 1,
                      index=index,
                      size=options.sizes.get(symbol))
      index += 1
      self.append(module)
      accumulator.append(module)
      module.expand_recurse(symbol, options, accumulator)
    return accumulator

  def export(self, out_dir):
    with (out_dir / self.path).open('w') as f:
      operations = []
      operations = self.write_imports(f)
      operations.append('a')
      operations = "+".join(operations)
      f.write(f"export function f_{self.name}() {{\n")
      if self.size:
        f.write("  let a=1;\n")
        f.write("  if (document.evaluate_all) {\n")
        f.write("    a=helper()\n")
        f.write("  }\n")
      else:
        f.write("  let a=1;")
      f.write(f"  return {operations};\n")
      f.write("}\n")
      if self.size:
        f.write("function helper() {\n")
        f.write("  let a=1;")
        # Use random numbers to increase entropy and lower compression quality.
        # The number of random digits dials in the average compression rate:
        # - 10 digits => ~3x
        # -  3 digits => ~5x
        # -  2 digits => ~7x
        random_digits = 10;
        instruction_length = (3+random_digits+1)+(3+random_digits+2)
        min_range = 10**(random_digits-1);
        max_range = 10**random_digits-1
        for i in range(math.floor((self.size - len(operations) * 2) / instruction_length)):
          number = random.randint(min_range, max_range)
          f.write(f"a+={number};a-={number};\n")
        f.write(";\n")
        f.write("  return a+100;\n")
        f.write("}\n")

    if self.has_children():
      (out_dir / self.submodule_path).mkdir()
      for module in self.children:
        module.export(out_dir)

  def write_imports(self, f):
    operations = []
    for module in self.children:
      f.write(
          f"import {{f_{module.name}}} from './{self.simple_name}/{module.name}.mjs'\n"
      )
      operations.append(f"f_{module.name}()")
    return operations


#=============================================================================


class App(object):
  def __init__(self, options):
    self.options = options
    self.create_module_tree()

  def create_module_tree(self):
    self.options.module_tree = []
    self.start_module = Module(ROOT_AXIOM, parent=None, depth=0, size=0)
    self.modules = self.start_module.expand_recurse(ROOT_AXIOM,
                                                    self.options,
                                                    accumulator=[])

  def export(self, path):
    path.mkdir(parents=True, exist_ok=True)

    print("Creating modules:")
    self.start_module.export(path)
    print(f"Created {len(self.modules )} modules")

    # Topologically sort paths
    self.modules.sort(key=lambda x: (len(x.path.parts), x.path.parts))

    print("Creating apps:")
    self.export_app(path, name="index")
    for count in (0, 10, 100, 500, len(self.modules)):
      self.export_app(path, 'prefetch', prefetch_count=count)

  def export_app(self, path, name, prefetch_count=0, wait=0):
    if name == 'index':
        file_name = 'index.html'
    else:
        file_name = f'app-{name}-{prefetch_count}.html'
    print(f"  {file_name}")
    with open(path / file_name, 'w') as f:
      f.write("""<html>
  <meta charset="utf-8">
<head>
  <title>MODULE BENCHMARK</title>
  <link rel="preload" as="script" href="../js/helper.js">
""")
      for module in self.modules[:prefetch_count]:
        f.write(f'  <link rel="modulepreload" href="{module.path}">\n')
      f.write(f"""</head>
<body>
  <h1>Info</h1>
  <dl>
    <dt>Expansion Rules:</dt>
    <dd>{self.options.rules}</dd>
    <dt>Module Sizes:</dt>
    <dd>{self.options.sizes}</dd>
    <dt>Depth:</dt>
    <dd>{self.options.depth}</dd>
    <dt>Module Count:</dt>
    <dd>{len(self.modules)}</dd>
    <dt>Total Source Size:</dt>
    <dd>{round(sum(map(lambda m: m.size, self.modules))/1024/1024, 2)} MiB</dd>
  </dl>

  <h1>Results</h1>
  <pre id="log"></pre>

  <script src="../js/helper.js"></script>
  <script src="../js/marker/start.js"></script>
  <script>
    timeStart('loadModules');
  </script>
  <script type="module">
    import {{f_A}} from './A.mjs'
    timeEnd('loadModules');
    log(new Date().toISOString(), "Loaded: A.mjs");
    document.f_A = f_A;
    runModuleCode();
  </script>
  <script src='../js/marker/end.js'></script>
</body>
</html>""")


#=============================================================================
if __name__ == "__main__":
  options = Options().options
  app = App(options)
  app.export(Path('out'))
