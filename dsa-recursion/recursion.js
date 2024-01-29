/** product: calculate the product of an array of numbers. */

function product(nums, sum = 1) {
  if (nums.length == 0) {
    return sum;    
  }
  return  product(nums.slice(1), nums[0] * sum);  
}

/** longest: return the length of the longest word in an array of words. */
function longest(words, max = 0, index = 0) {
  // Base case: if we've reached the end of the array
  if (index === words.length) {
    return max;
  }

  // Update the max if the current word is longer
  if (words[index].length > max) {
    max = words[index].length;
  }

  // Recursive call with the next index
  return longest(words, max, index + 1);
}


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length == 0) {
    return str;
  }
  return str[0] + everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  if (str[0] == str[str.length-1]) {
    return isPalindrome(str.slice(1,str.length-1))
  } else {
    return false;
  }
  

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0, len = arr.length) {
  if (len == 0) {
    return -1;
  }
  if (arr[idx] == val) {
    return idx;
  } else {
    return findIndex(arr, val, idx + 1, len - 1);
  }

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === '') {
    return '';
  }
  return revString(str.substr(1)) + str[0];
}
/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key])
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0) {
  if (arr.length === 0) {
    return -1;
  }

  let mid = Math.floor(arr.length / 2);
  let midVal = arr[mid];

  if (midVal === val) {
    return start + mid;
  } else if (midVal < val) {
    return binarySearch(arr.slice(mid + 1), val, start + mid + 1);
  } else {
    return binarySearch(arr.slice(0, mid), val, start);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
