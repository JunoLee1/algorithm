var decodeString = function (s){

    const cnt_stack = [];
    const char_stack = [];
    let crnt_char = '';
    let crnt_cnt = 0;

    for (let i = 0; i < s.length; i++){
        const char = s[i];

        if (isDigit(char)){
            crnt_cnt = crnt_cnt * 10 + parseInt(char);

        }else if (char === "["){
            cnt_stack.push(crnt_cnt);
            char_stack.push(crnt_char);
            crnt_cnt = 0;
            crnt_char = '';

        }else if (char ==="]"){
            const repeated = cnt_stack.pop();
            const prev_char = char_stack.pop();
            crnt_char = prev_char + crnt_char.repeat(repeated);
        }else{
            crnt_char += char;
        }

    }
    return crnt_char

};

function isDigit(char){
    return /\d/.test(char);
}
console.log(decodeString("2[a]3[bc]"))