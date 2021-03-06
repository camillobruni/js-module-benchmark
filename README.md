# Synthetic Module Benchmark

## Installation
To run this benchmark you need python and a local webserver, for instance
[local-web-server](https://www.npmjs.com/package/local-web-server) does the
trick.

## Basic Usage
1. Generate the modules: `rm -rf out/ && python3 ./gen.py`
2. Start webserver: `ws`
3. Run the benchmark:
  ```
  testing/xvfb.py out/release/chrome http://localhost:8000/out/prefetch-0.html
  ```

The `out/` directory contains various version of the main app with different
degrees of module [prefetching](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/modulepreload) and top-level includes.

## Extended Usage
`gen.py` can be used with simple expansion rules to generate arbitrary trees.
Let's consider the following simple tree:

```
   A
 / | \
B  A  C
 / | \
B  A  C
```

It can be generated with `./get.py --depth=2 --rules="A:BAC"`.
Notes: 
 - `A` is the default starting axiom.
 - A module name consist of a single character other than `,` and `:`.

Additionally you can specify the size of each generated module with `--sizes`:

```
./get.py --depth=2 --rules="A:AB" --sizes="A:12k,B:1m,C:1k"
```
## Examples

* [~250 small modules](./light-left): `--depth=70 --rules="A:ABCD" --sizes="A:1k,B:1k,C:1k,D:1k"`
* [~250 small modules](./light-right): `--depth=70 --rules="A:BCDA" --sizes="A:1k,B:1k,C:1k,D:1k"`
* [~1200 very small modules](./light-mixed): `--depth=8 --rules="A:ABCDA"`
* [~210 large modules](./heavy-middle): `--depth=70 --rules="A:BAC" --sizes="A:100k,B:1m,C:300k"`
