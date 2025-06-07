var findValidParenthesis = function(s){
    // problem definition : return true if it is valid parentheise

    // approach: stack 
    // This is because find pair of parenthesis.

    //storage
    const stack = [];
    const map = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    }

    for(let i = 0; i < s.length; i++){
        // if open parentheis
        const char = s[i];
        if (char ==='(' || char ==='{' || char ==='['){
            stack.push(char);

        } else {
            // if parentheis closed
            if(stack.length === 0 || stack.pop() !== map[char]) return false;
        }
    }
    return stack.length === 0;



}