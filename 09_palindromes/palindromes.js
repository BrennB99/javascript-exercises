const palindromes = function (word) {
  let wordArray = word.split("");
  let reversedArray = wordArray.reverse();
  reversedWord = reversedArray.join("");
  return reversedWord === word;
};

// Do not edit below this line
module.exports = palindromes;
