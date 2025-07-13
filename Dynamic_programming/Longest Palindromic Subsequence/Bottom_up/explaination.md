#  Problem name : LeetCode #516 Longest Palindromic Subsequence


## Problem definition: find the longest palindromic substring length in s[i ... j].

## Approaching

    - Dynamic Programming 
    
        1) sub problem

            i === 0 , j === 0 => 1

        2) existence of recursion

             i   j
            "b b b" => 2 + 1 , f(i, j) = f(i + 1, j - 1) + 2 

        3) overlaping sub problem 

## Code 
```js
var longestPalindromeSubseq = function(s) {

    const n = s.length;
    const dp = new Array.from({length: n}, () => Array(n).fill(0));

    for(let i = 0; i < n; i++){
        dp[i][i] = 1
    }
    for(let i = n - 1; i >= 0; i--){
        for(let j = i + 1; j < n; j++){
            if(s[i] === s[j]){
                dp[i][j] = dp[i + 1][j - 1] + 2
            }else{
            dp[i][j] = Math.max(dp[i + 1][j], dp[i, j -1]) 
            }
        }
    }
    return dp[0][n - 1]
}
