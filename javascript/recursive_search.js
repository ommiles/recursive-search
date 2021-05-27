function recursiveSearch(arr, target) {
  if (arr[0] == target) {
    return true
  } else if (arr.length == 0) {
    return false
  }
  return recursiveSearch(arr.slice(1), target)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

// iterate through each index of arr
// if the target val is found or not
// return an appropriate boolean
// BASE CASE: arr.length if falsy
// BASE CASE: truthy if val = target
// arr = arr[0]
// pass a shortened array
