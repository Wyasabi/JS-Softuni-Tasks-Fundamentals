// Write a program which receives an array of numbers and condense them by summing adjacent couples of elements until a 
// single number is obtained. 
// Examples
// For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, 
// then we sum again all adjacent elements and obtain {12+13} = {25}.


function condenseArrayToNumber(nums){

    while(nums.length > 1){
        let condensed = [nums.length-1];

        for(let i = 0; i<nums.length-1; i++){
            
            condensed[i] = nums[i] + nums[i+1];
            
        }
        nums = condensed;
    }
    console.log(nums[0]);
}



condenseArrayToNumber([2,10,3]);
