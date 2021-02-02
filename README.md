# Simple custom hook example

CRA kick-off, but with enzyme for testing

Simple example of a custom hook, including testing using a simplified mock class.

Note that custom hooks don't have to return `[thing, setThing]` like `useState` does. They can be managed internally. In this case we store the _real_ data in state hooks for demonstration.
