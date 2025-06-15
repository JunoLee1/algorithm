# Problem name:


## Problem url


## Problem definition:
    the value(target - num) is in storage, return(value, index)
## Approach:
    hash set
    
## code
 
```js
 var twoSum = function(nums ,target){
    // if the value(target - num) is in storage, return(value, index)
    // else return []
    
    // storage  
    const storage = new Map();

    for(let i = 0 ; i < nums.length; i++){
        let num = nums[i];
        const value = target - num;
        
        if(storage.has(value)) return [storage.get(value), i]
        storage.set(num, i)
    }
    return [];
 }
