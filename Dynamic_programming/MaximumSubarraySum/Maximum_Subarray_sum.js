var maxSubArray = function(nums) {
    // problem definition: return maximum sub array sum.
    // base_case: n === 0, nums[0] 
    // general case: f(n) = max(nums[i], f(n-1) + nums[i])

    const n = nums.length
    let crnt_max = nums[0]
    let global_max = nums[0]

    for(let i = 1; i < n; i++){
        let num = nums[i]
        crnt_max = Math.max(num, crnt_max + num)
        global_max = Math.max(crnt_max, global_max + crnt_max)
    }
    return global_max;

}
console.log(maxSubArray([2,3,-2,4]))