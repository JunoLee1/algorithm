# Problem name: Maximum Sub Array Sum



## Problem url:


## Problem definition:
    problem definition: return maximum sub array sum.


## Approach:
    1. Dynamic programming
        base case: n === 0, f(n) === nums[0]
        general case = max(f(n), f(n) + nums[i])

```js
var maxSubArray(nums){

    const n = nums.length;
    let crnt_max = nums[0]; //O(1)
    let glo_max = nums[0]; // (o(1))

    for(let i = 1; i < n; i++){
        crnt_max(crnt_max, crnt_max + nums[i];
        glo_max(glo_max, glo_max + crnt_max);
        )
    }
    return glo_max;
    
}
```
## time complexity : o(n)
## space complexity: o(1)


