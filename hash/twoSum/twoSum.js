var twoSum = function(nums ,target){
    // target = nums[i] + numi[j] => nums[j] = target - nums[i]
    // if map has nums[j], return j-index and nums[j].

    /*storage*/
    const map = new Map();

    /*calculator*/
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement)) return [map.get(complement),i]
        map.set(nums[i],i)
    }
    return [];
}