/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = n => n < 0 ? null : n < 2 ? 1 : n * factorial(n - 1);

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = array => array.length ? array[0] + sum(array.slice(1)) : 0;

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = array => Array.isArray(array[0]) ? arraySum(array[0]) + arraySum(array.slice(1)) :
    array.length ? array[0] + arraySum(array.slice(1)) : 0;

// 4. Check if a number is even.
let isEven = n => Math.abs(n) > 1 ? isEven(Math.abs(n) - 2) : (n === 0);

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function (n) {
    let m = Math.abs(n) - 1;
    if (m < 1) return 0;
    const isNegative = n < 0;
    let sum = m + sumBelow(m);
    return isNegative ? -sum : sum;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = (x, y) => (x + 1 < y) ? [++x].concat(range(x, y)) : (--x > y) ? [x].concat(range(x, y)) : [];

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function (base, exp) {
    const I = 100000;
    if (exp > 1) {
        const exp2 = parseInt((exp / 2).toString());
        const x = exponent(base, exp2);
        if (exp % 2) return x * x * base;
        else return x * x;
    }
    if (exp === 1) return base;
    if (!exp || !base) return 1;
    if (exp === -1) return parseInt((1 / base * I).toString()) / I;
    if (exp < 1) {
        const exp2 = parseInt((exp / 2).toString());
        const x = exponent(parseInt((1 / base * I).toString()) / I, exp2);
        if (exp % 2) return parseInt((1 / (x * x * base) * I).toString()) / I;
        else return parseInt((1 / (x * x) * I).toString()) / I;
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function (n) {
    if (n === 0) return false;
    if (n === 1) return true;
    return !(n % 2) && powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
let reverse = s => (s.length < 2) ? s : s.slice(-1) + reverse(s.slice(0, s.length - 1));

// 10. Write a function that determines if a string is a palindrome.
let palindrome = function (string) {
    string = string.trim().toLowerCase();
    if (string.length > 1) {
        return (string[0] !== string[string.length - 1]) ? false : palindrome(string.slice(1, -1));
    }
    return true;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
let modulo = function (x, y) {
    if (!y) return NaN;
    let isNegative = false;
    let X = x;
    if (X < 0) {
        isNegative = true;
        X = -X;
    }
    if (y < 0) y = -y;
    if (X === y) return 0;
    if (X < y) return x;
    return isNegative ? modulo(-(X - y), y) : modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiply = function (x, y) {
    if (!x || !y) return 0;
    if (x === 1) return y;
    if (y === 1) return x;
    let isNegative = false;
    if (x < 0 && y < 0) {
        x = -x;
        y = -y;
    } else if (x < 0 && y > 0) {
        isNegative = true;
        x = -x;
    } else if (x > 0 && y < 0) {
        isNegative = true;
        y = -y;
    }
    return isNegative ? -y + multiply(-x + 1, y) : y + multiply(x - 1, y);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
let divide = function (x, y) {
    if (y === 0) return NaN;
    if (y === 1) return x;
    if (y === -1) return -x;
    let isNegative = false;
    if (x <= 0 && y < 0) {
        x = -x;
        y = -y;
    } else if (x <= 0 && y > 0) {
        isNegative = true;
        x = -x;
    } else if (x >= 0 && y < 0) {
        isNegative = true;
        y = -y;
    }
    if (x < y) return 0;
    return isNegative ? -1 + divide(x - y, -y) : 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let gcd = function (x, y) {
    if (x < 0 || y < 0) return null;
    if (!x) return y;
    if (!y) return x;
    return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
let compareStr = function (str1, str2) {
    // if (str1.length !== str2.length) return false; // short-circuit fails recursion test
    if (!str1.length && !str2.length) return true;
    if (str1[0] !== str2[0]) return false;
    return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
let createArray = s => (s.length === 1) ? [s] : [s[0]].concat(createArray(s.slice(1)));

// 17. Reverse the order of an array
let reverseArr = array => (array.length === 1) ? array : [array.pop()].concat(reverseArr(array));

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
let buildList = (value, length) => (length === 1) ? [value] : [value].concat(buildList(value, --length));

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
let fizzBuzz = function (n) {
    if (n === 1) return ['1'];
    let s = (!(n % 3)) ? 'Fizz' : '';
    if (!(n % 5)) s += 'Buzz';
    if (!s) s = String(n);
    return fizzBuzz(--n).concat([s]);
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function (array, value) {
    const result = (array[0] === value) ? 1 : 0;
    return (array.length === 1) ? result : result + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = (array, callback) => (array.length === 1) ? callback(array[0]) :
    [callback(array[0])].concat(rMap(array.slice(1), callback));

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
let countKeysInObj = function (obj, key) {
    let count = obj.hasOwnProperty(key) ? 1 : 0;
    for (const prop in obj)
        if (typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) count += countKeysInObj(obj[prop], key);
    return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let countValuesInObj = function (obj, value) {
    let count = 0;
    for (const key in obj) {
        if (obj[key] === value) count++;
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) count += countValuesInObj(obj[key], value);
    }
    return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
let replaceKeysInObj = function (obj, oldKey, newKey) {
    if (obj.hasOwnProperty(oldKey)) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
    }
    for (const key in obj)
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) replaceKeysInObj(obj[key], oldKey, newKey);
    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.

// Second solution (works, but does this really use recursion?):
let fibonacci = function (n) {
    if (n < 1) return null;
    if (!Array.isArray(n)) n = [0, 1].concat(Array(n - 1));
    if (n[n.length - 1]) return n;
    const nextIndex = n.findIndex(e => typeof e === 'undefined');
    n[nextIndex] = n[nextIndex - 2] + n[nextIndex - 1];
    return fibonacci(n);
};

// First solution (works, but is this really meeting the one-argument requirement?):
//
// let fibonacci = function (n) {
//     if (n < 1) return null;
//     if (!Array.isArray(n)) n = [n, 1, 0];
//     n.push(n[n.length - 2] + n[n.length - 1]);
//     if (n.length - 3 < n[0]) return fibonacci(n);
//     return n.slice(2);
// };

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = n => (n < 0) ? null : (n < 2) ? n : nthFibo(n - 2) + nthFibo(n - 1);

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let capitalizeWords = function (array) {
    if (array.every(e => e === e.toUpperCase())) return array;
    array.push(array.shift().toUpperCase());
    return capitalizeWords(array);
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
let capitalizeFirst = function (array) {
    String.prototype.toFirstUpperCase = function () {
        return this[0].toUpperCase().concat(this.slice(1));
    };
    if (array.every(e => e === e.toFirstUpperCase())) return array;
    array.push(array.shift().toFirstUpperCase());
    return capitalizeFirst(array);
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
let nestedEvenSum = function (obj) {
    let sum = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'number' && !(obj[key] % 2)) sum += obj[key];
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) sum += nestedEvenSum(obj[key]);
    }
    return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
let flatten = function (array) {
    let result = [];
    array.forEach(e => {
        if (Array.isArray(e)) result = result.concat(flatten(e));
        else result.push(e);
    });
    return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
let letterTally = function (str, obj) {
    if (typeof obj !== 'object') obj = {};
    if (!str.length) return obj;
    obj[str[0]] = obj[str[0]] + 1 || 1;
    return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
let compress = function (list) {
    if (list.length === 1) return list;
    const result = list[0] === list[1] ? [] : [list[0]];
    return result.concat(compress(list.slice(1)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
let augmentElements = function (array, aug) {
    const result = [...array[0], aug];
    return (array.length === 1) ? [result] : [result, ...augmentElements(array.slice(1), aug)];
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function (array) {
    const result = array[0] === 0 && array[0] === array[1] ? [] : [array[0]];
    return (array.length === 1) ? array : result.concat(minimizeZeroes(array.slice(1)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function (array) {
    const first = Math.abs(array[0]);
    if (array.length === 1) return [first];
    const second = -(Math.abs(array[1]));
    if (array.length === 2) return [first, second];
    return [first, second].concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let numToText = function (str) {
    const dict = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arr = str.split(' ');
    const word = arr.shift();
    const num = parseInt(word);
    const result = Number.isNaN(num) ? word : dict[num];
    return (!arr.length) ? result : result + ' ' + numToText(arr.join(' '));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
let tagCount = function (tag, node = document) {
    let numTags = 0;
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toUpperCase() === tag.toUpperCase()) numTags++;
    if (node.hasChildNodes()) node.childNodes.forEach(n => numTags += tagCount(tag, n));
    return numTags;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
let binarySearch = function (array, target) {
    if (!array.length) return null;
    const middle = Math.trunc(array.length / 2);
    if (target === array[middle]) return middle;
    if (target < array[middle]) return binarySearch(array.slice(0, middle), target);
    const searchRight = binarySearch(array.slice(middle + 1), target);
    return searchRight === null ? null : searchRight + middle + 1;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
let mergeSort = function (array) {

    if (array.length < 2) return array;

    const mergeArrays = (left, right) => {
        const mergedArray = Array(left.length + right.length);
        let leftIdx = 0;
        let rightIdx = 0;
        for (let mergedIdx = 0; mergedIdx < mergedArray.length; mergedIdx++) {
            if (leftIdx < left.length && (left[leftIdx] < right[rightIdx] || rightIdx === right.length))
                mergedArray[mergedIdx] = left[leftIdx++];
            else mergedArray[mergedIdx] = right[rightIdx++];
        }
        return mergedArray;
    };

    const middle = Math.trunc(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));

};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
let clone = function (input) {

    if (Array.isArray(input)) {
        const clonedArray = Array(input.length);
        input.forEach((e, i) => clonedArray[i] = clone(e));
        return clonedArray;
    }

    if (typeof input === 'object') {
        const clonedObject = {};
        for (const [key, value] of Object.entries(input)) clonedObject[key] = clone(value);
        return clonedObject;
    }

    return input;
};
