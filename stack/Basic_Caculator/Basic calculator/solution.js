var basicCaculator = function(s){
    //storage
    const stack = [];
    let num = 0
    let sign = 1;
    let result = 0;


    for (let i = 0; i < s.length; i++){
        const char = s[i];
        if (/\d/.test(char)){
            num = num * num + parseInt(char)
        }
        else if(char === "+"){
            result += sign * num
            sign = 1 
            num = 0
        }

        else if(char === "-"){
            result += sign * num
            sign = -1
            num = 0
        }
        else if(char ==="("){
            stack.push(num)
            stack.push(sign)
            sign = 1
            num = 0
        }else if(char ===")"){
            result += sign * num 
            result *= stack.pop()
            result += stack.pop()
        }

    }
    return result + (sign * num)
    // if "+", 1 * num
    // if "-", -1 * num  
    // "(", num push into stack
    // ")", pop from stack, add in result
}