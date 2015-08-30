/**
 * ////////////////////////////////////////
 * /////////// Random iterator ////////////
 * ////////////////////////////////////////
 *
 * This little component allows to randomly iterate
 * over an array using iterators and generators.
 */

 /**
  * Exporting the module appropriately given
  * the environment (AMD, Node.js and the browser).
  */
 (function (name, definition) {
    if (typeof define === 'function' && define.amd) {
        // Defining the module in an AMD fashion.
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        // Exporting the module for Node.js/io.js.
        module.exports   = definition();
    } else {
        var gl       = this;
        var instance = definition();
        var old      = gl[name];

        /**
         * Allowing to scope the module
         * avoiding global namespace pollution.
         */
        instance.noConflict = function () {
            gl[name] = old;
            return instance;
        };
        // Exporting the module in the global
        // namespace in a browser context.
        gl[name] = instance;
    }
 })('Random', function () {

 	var iterator = function (array) {
		if (!Array.isArray(array)) {
			throw new Error('Argument must be of type `Array`');
		}
		this.available = array.slice();
	};

	iterator.prototype.hasNext = function () {
		return this.available.length > 0;
	};

	iterator.prototype.next = function () {
		if (!this.hasNext())
			return;
		var rand_index = (Math.floor(Math.random() * this.available.length));
		return this.available.splice(rand_index, 1)[0];
	};

	var generator = function (array) {
	  var it = new iterator(array);

	  return function () {
	  	return it.next();
	  };
	};

	return {
		Iterator:  iterator,
		Generator: generator
	};
});