# closure-notepad
Code sample based on the Closure tutorial

## Getting started

Download the Closure Library from the Git repository by executing the following command from the command line inside your working project directory.

```shell
git clone https://github.com/google/closure-library
```

## Calculating dependencies

```shell
closure-library/closure/bin/build/closurebuilder.py \
  --root=closure-library/ \
  --root=myproject/ \
  --namespace="myproject.start"
```

## Compiled and minified version

To get compiled output, you'll need the Closure Compiler executable jar file and you'll need to tell ClosureBuilder where it is. [Download the jar from the repository](http://dl.google.com/closure-compiler/compiler-latest.zip) and put it in the same directory that contains your closure-library directory.

```shell
closure-library/closure/bin/build/closurebuilder.py \
  --root=closure-library/ \
  --root=myproject/ \
  --namespace="myproject.start" \
  --output_mode=compiled \
  --compiler_jar=compiler.jar \
  > myproject/start-compiled.js
```

### Additional flags to Closure Compiler

```shell
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS"
```
