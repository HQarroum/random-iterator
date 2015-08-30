![Logo](http://unicode.org/reports/tr29/print-images/random_access.jpg)

# random-iterator

This little component allows to randomly iterate over an array using iterators and generators.

Current version: **1.0.0**

Lead Maintainer: [Halim Qarroum](mailto:hqm.post@gmail.com)

# Iterator interface

To use an iterator instance to walk through the array, you can use the `RandomIterator` interface.

```Javascript

var array    = [1, 2, 5, 6, 10, 20, 25];
var iterator = new RandomIterator(array);

while (iterator.hasNext()) {
  // Displays the value located at a
  // random index of the array.
	console.log(iterator.next());
}
```
