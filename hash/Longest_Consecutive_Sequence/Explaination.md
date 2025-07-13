# problem Name: #128 Longest Consecutive Sequence

## Problem definition:
    return the maximum length of sequence

    what is Consecutive Sequence?

        It is natural number which is bigger than 1, smaller than previous number or element.

## Approaching:
   Consecutive sequence =  n + 1



## Code:

```js
var longestConsecutive = function(nums) {
    numSet = new Set(nums) 
    max_l = 0

    for(let num of numSet){

        if (!numSet.has(num - 1)){
            let crnt = num
            let streak = 1
            }while(numSet.has(crnt + 1)){ 
                crnt += 1
                streak += 1
        }
        max_l = Math.max(streak, max_l)
    }
    return max_l
}