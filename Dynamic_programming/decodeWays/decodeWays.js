var numDecoding = function(s){
    /**
     1.problem :
        return the number of ways to decode it
     2.approach:
        Dynamic programming since it can find sub problem

        1. sub_prob:
           f(1) = 1;
           f(0) = 1:

        2. general Case:
            f(n) = f(n-1: n) +f(n-2:n)
     */
    const length = s.length
    const dp = new Array(length + 1).fill(0)
    dp[0] = 1
    dp[1] = 1

    for(let i = 0; i < length; i++){
        const oneDigit = parseInt(s.slice(k-1,k));
        const twoDigit = parseInt(s.slice(k-2, k));
        if (0 < oneDigit && oneDigit < 10){
            dp[i] += dp[i - 1] 
        }
        if (9 < twoDigit && twoDigit < 27){
            dp[i] += dp[i - 2]
        }
    }
    return dp[length] // 
}


// topdown
    const memo ={};
    function dp(k){
        
        if (memo[k] !== undefined) return memo[k];//
        if (k === 0) return 1;// emty comb always true
        if (k === 1) return 1;
        
        //convert to int
        const oneDigit = parseInt(s.slice(k-1,k));
        const twoDigit = parseInt(s.slice(k-2, k)); 
        let res = 0
        if(0 < oneDigit && oneDigit < 10){
            res += dp(k - 1);
        }
        if(10< twoDigit && twoDigit< 27){
            res += dp(k - 2);
        }
        memo[k] = res;
        return res
    }
    return dp(length);// k-th 까지의 총경우의수

console.log(numDecoding("12"));