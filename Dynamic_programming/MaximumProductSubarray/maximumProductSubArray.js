var maxProduct = function(nums) {
    // problem def: return maximum product sub array
    // base case : i === 0, nums[0]
    // general case: f(n) = max(nums[i], f(n-1)*nums[i])



    //negative * negative = positive number 
    // base case
    const crnt_max = nums[0];
    const crnt_min = nums[0];

    const n = nums.length
    let res = nums[0];


    for(let i = 1; i < n; i++){
        let num = nums[i];

        // negative * negative = positive
        if(num < 0){
            [crnt_max, crnt_min] = [crnt_min, crnt_max];
        }

        crnt_max = Math.max(num, crnt_max * num);
        crnt_min = Math.min(num, crnt_min * num); // tracking negative number
        
        res = Math.max(crnt_max, res * crnt_max);
    }
    return res;

}
/* Kadain Algorithm 
1. time complexity : o(n)
2. space complexity : o(1)

*/