var decodeString = function(s){
    const stack = [];
    const length = s.length;
    let num = 0;
    let crnt_str = ''


    for (let i = 0; i < length; i++){
        const char = s[i];
        
        if(/\d/.test(char)){
            num = num * 10 + parseInt(char)
        }

        if(char === '['){
            stack.push(crnt_str, num);
            crnt_str = '';
            num = 0;
        }

        if(char ===']'){
            const [prev_str, repeated] = stack.pop();
            const crnt_str = prev_str + crnt_str.repeat(repeated);
        }
        crnt_str += char
    }
    return crnt_str;
}