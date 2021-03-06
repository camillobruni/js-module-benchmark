// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function hasURLParam(key) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.has(key)
}

async function runModuleBenchmark(module_promise) {
  const module = await module_promise;
  timeEnd('loadModules');
  log(new Date().toISOString(), "Loaded: A.mjs");

  const kCount = 5;
  log("\nEvaluating imports only:".toUpperCase())
  document.evaluate_all = false
  for (let i=1; i<=kCount; i++) {
    const label = `Iteration ${i}: evaluate f_A()`;
    timeStart(label)
    log('    f_A() result=', await module.f_A());
    timeEnd(label);
  }

  log("\nEvaluating all code:".toUpperCase())
  document.evaluate_all = true
  for (let i=1; i<=kCount; i++) {
    const label = `Iteration ${i}: evaluate all f_A()`;
    timeStart(label);
    log('    f_A() result=', await module.f_A());
    timeEnd(label);
  }
}

function log(...msg) {
  console.log(...msg);
  document.getElementById('log').innerText += `${msg.join(' ')}\n`;
}

function timeStart(label) {
  const date = new Date().toISOString();
  log(`${label} start: ${date}`);
  console.time(label);
  performance.mark(`${label}-start`);
}

function timeEnd(label) {
  performance.mark(`${label}-end`);
  console.timeEnd(label);
  performance.measure(label, `${label}-start`, `${label}-end`);
  const time = performance.getEntriesByName(label)[0].duration;
  log(`${label} duration: ${time.toFixed(2)}ms`);
}
