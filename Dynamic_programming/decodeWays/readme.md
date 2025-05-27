# Problem Name: Leetcode #91
## Problem explaination
- url
- definition :return the number of ways to decode it

## Approach
    1. Dynamic programming
        this is because we can segment to sub problem

        1. sub_prob:
            if the length or the string start with "0" return 0
            
            else: count 1 

        2. general Case:
            f(n) = f(n-1: n) +f(n-2:n)
## Code
``` js

function solution(s){
    const n = s.length
    const dp = new Array(n + 1)fill(0);// dp table 
    if (s[0] === "0" || n === 0) return 0;
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++){
        const oneDigit = parseInt(s.slice(i - 1:i),10)
        const twoDigit = parseInt(s.slice(i - 2:i),10)


        // general case
        if (oneDigit < 10 && oneDigit > 0){
            dp[i] += dp[i - 1]//
        }
        if (twoDigit < 37 && twoDigit > 10){
            dp[i] += dp[i - 2]
        }
    }
    return dp[n]
}

