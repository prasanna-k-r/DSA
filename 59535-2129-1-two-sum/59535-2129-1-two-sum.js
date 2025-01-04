/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create an object to store numbers and their corresponding indices
    let numsToArray = {}
    // Loop through the array
    for (let i=0; i<nums.length; i++) {
        // Calculate the difference between the target and the current number
        const diff = target - nums[i];
        // Check if the difference already exists in the object
        if (numsToArray.hasOwnProperty(diff)) {
            // If it exists, return the indices of the current number and ther number that adds up to the target
            return [i, numsToArray[diff]]
        }
        // It if doesn't exist, add the current number and its index to the object
        numsToArray[nums[i]] = i;
    }
    // If no two numbers add up to the target, returns null
    return null;
};