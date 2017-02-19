# lean.js

An example of using Lean's `backend` API to implement a compiler
from Lean's internal IR to JavaScript.

In order to build this you will need to install my unmerged branch of
[Lean](https://github.com/jroesch/lean/tree/direct-calls).

I just started to put this together in the last couple days and it
is in a rough state.

Currently we ship a small compilation script that will work for the examples.
You can invoke it like so: `./compile.sh examples/hello_world.lean`.

It should produce a JavaScript file besides the input file with `.js` at the end.

The project structure is currently as follows for the interested:

- `src` contains the Lean code which implements the JavaScript backend.
- `runtime` contains an `npm` package which implements the basic
   runtime functionality of Lean, replacing the VM implemented in C++
- `examples` contains examples of the programs we can currently compile
   and run

Feel free to contribute, or contact me.
