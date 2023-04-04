'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var testMethod = function testMethod(nums) {
  return nums.reduce(function (acc, i) {
    return i + acc;
  }, 0);
};

exports.testMethod = testMethod;
