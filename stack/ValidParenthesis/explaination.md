# Problem name : # Leetcode valid parenthesis

## Problem definition: return true if it is valid parenthesis 

## Approach: 

    If s[i] ==="(", s[i] push into stack.

    If ith string is closed parenthesis, pop previous element from the stack. return previous element === this.map  



## Code
```js
var findValidParenthesis = function(s){
    stack = [];
    map = {
        ")" : "(",
        "}":"{",
        "]":"[",
    }
    for(let i = 0; i < s.length; i++){
        const char = s[i];


        if (char === "("){
            stack.push(char);

        } else {
 
            const prev = stack.pop();
            if (prev !== map[char]){
                return false;
            }
        }
    }
    return return(stack.length === 0);
}