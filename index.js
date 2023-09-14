function hasTargetSum(array, target) {
  // Write your algorithm here
  let hasTargetSum = false;
  array.find((element, index) => {
    for (let i = index + 1; i < array.length; i++) {
      if (element + array[i] === target) {
        hasTargetSum = true;
        break;
      }
      continue;
    }
    return hasTargetSum;
  });
  return hasTargetSum;
}

/* 
  Write the Big O time complexity of your function here

  Time complexity: O(n²)
  Space Complexity: 0(1)

*/

/* 
  Add your pseudocode here
  given array of number of length L
  target : number

  initialize Algotithme
  hasTargetSum = false

  for i = 0 to L
   for j = i to L
      if(array[j] + array[i] = target) : 
      hasTargetSum = true 
      break for
      else : 
      continue for
  end for
  if (hasTargetSum = trye): 
  break:
 end for
 
 return hasTagetSum

*/

/*
  Add written explanation of your solution here

  first iterate through the array for each element 
  check if its addition with the next elemnt equals the target
  when moving to the next element start the second loop from the same index
  as the first loop for optimization purposes
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
