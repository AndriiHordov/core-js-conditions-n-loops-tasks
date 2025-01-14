/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
const isPositive = (number) => number >= 0;

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (max < b) max = b;
  if (max < c) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    (queen.x === queen.y && king.x === king.y) ||
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (
    a &&
    b &&
    c &&
    (a === c || b === c || a === b) &&
    a + b > c &&
    a + c > b &&
    c + b > a
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const low = num % 10;
  const high = num >= 10 ? Math.floor(num / 10) : 0;
  let result = '';
  switch (low) {
    case 1:
    case 2:
    case 3: {
      for (let i = 0; i < low; i += 1) {
        result += 'I';
      }
      break;
    }
    case 4: {
      result += 'IV';
      break;
    }
    case 5: {
      result += 'V';
      break;
    }
    case 6:
    case 7:
    case 8: {
      result += 'V';
      for (let i = 0; i < low - 5; i += 1) {
        result += 'I';
      }
      break;
    }
    case 9: {
      result += 'IX';
      break;
    }
    default: {
      break;
    }
  }
  if (high) {
    for (let i = 0; i < high; i += 1) {
      result = `X${result}`;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1': {
        result += 'one';
        break;
      }
      case '2': {
        result += 'two';
        break;
      }
      case '3': {
        result += 'three';
        break;
      }
      case '4': {
        result += 'four';
        break;
      }
      case '5': {
        result += 'five';
        break;
      }
      case '6': {
        result += 'six';
        break;
      }
      case '7': {
        result += 'seven';
        break;
      }
      case '8': {
        result += 'eight';
        break;
      }
      case '9': {
        result += 'nine';
        break;
      }
      case ',':
      case '.': {
        result += 'point';
        break;
      }
      case '0': {
        result += 'zero';
        break;
      }
      case '-': {
        result += 'minus';
        break;
      }
      default: {
        break;
      }
    }
    result += numberStr[i + 1] ? ' ' : '';
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let copy = num;
  while (copy) {
    const last = copy % 10;
    if (last === digit) return true;
    copy = Math.floor(copy / 10);
  }
  return false;
}
/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let rightSum = 0;
  let leftSum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    rightSum += arr[i];
  }
  for (let i = 0; i < len; i += 1) {
    rightSum -= arr[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result[i] = [];
  }
  let index = 1;
  for (let i = 0, j = size - 1; i < j; i += 1, j -= 1) {
    for (let k = i; k < j; k += 1) {
      result[i][k] = index;
      index += 1;
    }
    for (let l = i; l < j; l += 1) {
      result[l][j] = index;
      index += 1;
    }
    for (let m = j; m > i; m -= 1) {
      result[j][m] = index;
      index += 1;
    }
    for (let n = j; n > i; n -= 1) {
      result[n][i] = index;
      index += 1;
    }
  }
  if (size % 2) {
    const center = Math.floor(size / 2);
    result[center][center] = size * size;
  }
  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copy = [...matrix];
  const array = matrix;
  array.length = 0;
  for (let i = 0; i < copy.length; i += 1) {
    const middle = [];
    for (let k = copy.length - 1, l = 0; k >= 0; k -= 1, l += 1) {
      middle[l] = copy[k][i];
    }
    array[i] = middle;
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr, leftPointer = 0, rightPointer = arr.length - 1) {
  const swapElements = (array, left, right) => {
    const arrCopy = array;
    [arrCopy[left], arrCopy[right]] = [arrCopy[right], arrCopy[left]];
  };
  const divide = (source, pointerLeft, pointerRight) => {
    let left = pointerLeft;
    let right = pointerRight;
    const middle = source[Math.floor((left + right) / 2)];

    while (left <= right) {
      while (source[left] < middle) {
        left += 1;
      }
      while (source[right] > middle) {
        right -= 1;
      }
      if (left <= right) {
        swapElements(source, left, right);
        left += 1;
        right -= 1;
      }
    }
    return left;
  };

  if (arr.length <= 1) return arr;

  let index = divide(arr, leftPointer, rightPointer);

  if (leftPointer < index - 1) {
    index -= 1;
    sortByAsc(arr, leftPointer, index);
  }
  if (rightPointer > index) {
    sortByAsc(arr, index, rightPointer);
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function split(string) {
    let even = '';
    let odd = '';
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2) {
        odd += string[i];
      } else {
        even += string[i];
      }
    }
    return even + odd;
  }
  let copy = str;
  let count = iterations;
  while (count) {
    copy = split(copy);
    count -= 1;
    count = str === copy ? iterations % (iterations - count) : count;
  }
  return copy;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const source = [...`${number}`].map((char) => +char);
  const len = source.length;
  const swapElements = (arr, first, second) => {
    const copy = arr;
    [copy[first], copy[second]] = [copy[second], copy[first]];
  };
  if (len <= 1) return number;
  let firstIndex = len - 2;
  while (firstIndex >= 0 && source[firstIndex] >= source[firstIndex + 1]) {
    firstIndex -= 1;
  }
  if (firstIndex < 0) return number;
  let secondIndex = len - 1;
  while (source[secondIndex] <= source[firstIndex]) {
    secondIndex -= 1;
  }
  swapElements(source, firstIndex, secondIndex);
  let prev = firstIndex + 1;
  let last = len - 1;
  while (prev < last) {
    swapElements(source, prev, last);
    prev += 1;
    last -= 1;
  }
  return +source.join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
