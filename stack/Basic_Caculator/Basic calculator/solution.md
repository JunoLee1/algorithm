# Problem Name: # 224 Basic Caculator

## Problem definition : Given String number, return the result of calculation.

## Approach:


    1. if the character is integer ?

    2. sign 

    3. priority of calculation
        ()


## Code

```js

var basicCalculator = function(s){
    const stack = [];
    let res = 0;
    let sign = 1;
    let number = 0;

    for (char of s){
        if (/\d/.test(char)){// if char is digit  
            number = number * 10 + parseInt(char) 
        }// O(1)

        // operator
            else if(char === "+"){
                res += sign * number; 
                sign = 1; 
                number = 0; 
            }
            else if ( char === "-"){
                res += sign * number;
                sign = -1; // convert to the negative
                number = 0
            }
        // parenthesis
            else if( char === "("){
                stack.push(res)// O(1)
                stack.push(sign)
                // reset
                res = 0;
                sign = 1;
            }
            else if( char === ")"){
                const prevNum = stack.pop();//O(1)
                const prevSign = stack.pop(); //O(1)

                res = prevSign * res + prevNum
            }
    }
    if (number !== 0){ 
        res = sign * number
    }
    return res;
}



```
The time Complexity O(n) because we iterate through the each character in the string exactly once.
All the operations inside the loop -checking the digit, updating number, and handling the sign, parenthesis takes O(1) time complexity.
So overall is O(1 * n) = o(n)

The space complexity is O(n) because we may store up to n/2 pairs of res and sign in the stack due to nested parentheses.
In the worst case, with deeply nested expressions like (((((...))))), we push values onto the stack n times, so it becomes O(n).