# Unhandled Exception in JavaScript Arithmetic Operations

This repository demonstrates a common JavaScript error: unhandled exceptions.  The `bug.js` file contains a set of arithmetic functions (`add`, `subtract`, `multiply`, `divide`). The `divide` function specifically throws an error if division by zero is attempted.  The main part of the script then calls these functions with various inputs, including a division by zero. This results in the program terminating abruptly due to the unhandled exception.

The solution, in `bugSolution.js`, addresses this by using a `try...catch` block to gracefully handle the potential error, preventing the program from crashing.