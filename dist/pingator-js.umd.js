(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["pingator-js"] = {}));
})(this, (function (exports) { 'use strict';

	var testMethod = function testMethod(nums) {
	  return nums.reduce(function (acc, i) {
	    return i + acc;
	  }, 0);
	};

	exports.testMethod = testMethod;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
