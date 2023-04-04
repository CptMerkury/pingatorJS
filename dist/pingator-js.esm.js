var testMethod = function testMethod(nums) {
  return nums.reduce(function (acc, i) {
    return i + acc;
  }, 0);
};

export { testMethod };
