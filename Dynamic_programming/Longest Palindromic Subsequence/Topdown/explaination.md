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
    const memo = new Array.from({length : n}, () => Array(n).fill(-1))



    function topdown(i, j){
        if( i === j) return 1

        if( i > j) return 0;

        if(memo[i][j] !== -1) return memo[i][j];

        if(s[i] === s[j]){
            memo[i][j] = topdown(i + 1, j - 1)+ 2
        } else {
            memo[i][j] = Math.max(topdown(i + 1, j), topdown(i, j - 1))
        }
        return memo[i][j]// current  subsequence length
    }
    return topdown(0, n - 1) // 0 - (n -1)th 
}