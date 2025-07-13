# Problem Name : #560 Leetcode Subarray sum equal with Int K.

## Problem definition
    return the total number of subarrays whose sum equals to k.


## Appraoching 
    Hash Map 

    k = prefix[j] + prefix[i]
    prefix[i] = k - prefix[j]
    => similar (?) construction twoSum 
## Code
```js
var subarraySum = function(nums, k) {
    const prefix_map = new Set()
    Map.set(0, 1)

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(!prefix_map.has(k - num))
    }
}