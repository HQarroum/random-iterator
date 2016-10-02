# random-iterator
> This little component allows to randomly iterate over an array using iterators and generators.

[![Code Climate](https://codeclimate.com/repos/55e34129e30ba0755701d6e7/badges/270844380d3b44a833ee/gpa.svg)](https://codeclimate.com/repos/55e34129e30ba0755701d6e7/feed)

Current version: **1.0.0**

Lead Maintainer: [Halim Qarroum](mailto:hqm.post@gmail.com)

## Iterator interface

To use an iterator instance to walk through the array, you can use the `Random.Iterator` interface.

```Javascript
const array    = [1, 2, 5, 6, 10, 20, 25];
const iterator = new Random.Iterator(array);

while (iterator.hasNext()) {
  // Displays the value located at a
  // random index of the array.
  console.log(iterator.next());
}
```

It is guaranteed that each value will only be returned once by `.next`, and that it will return an undefined value once every values of the array have been returned.

## Generator interface

If you'd like to use a function to iterate randomly over the array, you can generate one using `Random.Generator`.

```Javascript
const array = [1, 2, 5, 6, 10, 20, 25];
const next  = Random.Generator(array);

for (let value; value = next();) {
  console.log(value);
}
```

## No conflict

Since the random iterator module is written in the form of an UMD, it might be easy to use it using module loaders such as `RequireJS` or `require` in Node while still keeping the module completely encapsulated.

However, in the context of a browser, the `Random` object name is exported in the global namespace. To prevent it from conflicting with another component exporting an object with the same name in the global namespace, you can use the `.noConflict` function as follow.

```Javascript
// After this call, `random` will reference the
// exported `Random` object, and the global `Random`
// attribute will be restored.
var random = Random.noConflict();
```
