var calculate = function(s){
    let stack = [];
    let num = 0
    let sign = "+"
    let 
    for(let c of s){
        if (/\d/.test(c)){
            num  = num * 10 + Number(c)
        }
        else if ("+-*/".includes(c)){//
             if (c === "+"){
            stack.push(num);
            }

            else if(c === "-"){
                stack.push(-num);
            }
            else if (c === "*"){
                let prevNum = stack.pop()
                stack.push(prevNum * num)
            }
            else if(c === "/"){
                let prevNum = stack.pop()
                stack.push(prevNum <0 ? Math.ceil(prevNum/num) : Math.floor(prevNum/num))
            }
            sign = c
            num = 0
        }
    }
    return stack.reduce((a, b) => a + b, 0);
}