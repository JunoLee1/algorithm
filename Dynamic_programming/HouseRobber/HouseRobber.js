var Robhouse = function(nums){
    /*
        1. Problem definition:
            return maximum money that I can rob in neighborhood.

        2. Approaching:
            Dynamic programming => can find sub problem 

        3. Base case:
            if nums.length = 0, return 0
            if nums.length = 1, max(nums[0], nums[1])

        4. general case:
            f(n) = max(f(n - 1), f(n - 2))


     */
    const length = nums.length;
    const dp = Array(length).fill(0);

    if (length === 0) return 0
    if (length === 1) return nums[0];


    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1])
    
    for(let i = 2; i < length; i++){
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[length - 1];
}