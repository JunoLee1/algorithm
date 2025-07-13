var longestConsecutive = function(nums) {
    /**
         * Problem definition:
            return the maximum length of sequence.

         * What is Successive sequence ?
            "Successive sequence is bigger than 1, smaller than previous element."
            For example: [1, 2, 3, 4] or [100, 101, 102]

         * Approaching:
            - Use Set to store number by o(1) time complexity.

            -  For each number, only try to build a sequence if it's  the start (i.e., num - 1 is not in the Set)
                
            - Then count how long the sequence extends (num + 1, num + 2, ...)
            
            - Track the maximum sequence length found
     */

    const numSet = new Set(nums);  
    let max_l = 0

    for(let num of nums){
        if(!numSet.has(num - 1)){
            let crnt = num;
            let streak = 1;

            while(numSet.has(crnt + 1)){
                crnt += 1;
                streak += 1;
            }
            max_l = Math.max(max_l, streak)
        }
    }
    return max_l
}