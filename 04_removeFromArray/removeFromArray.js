const removeFromArray = function (array, ...args) {
  args.forEach((x) => {
    argIndex = array.indexOf(x);
    if (argIndex >= 0) {
      array.splice(argIndex, 1);
    }
  });
  console.log(array);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
