/**
 * 
 * @param {Number[]} nums 
 */

function getSecondLargest(nums){
    nums = nums.sort((a, b) => b - a);

    let secondLargest = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i + 1]){
            secondLargest = nums[i + 1];
            break;
        }
    }
    console.log(secondLargest);
}

getSecondLargest([2, 3, 6 , 6, 5]);

