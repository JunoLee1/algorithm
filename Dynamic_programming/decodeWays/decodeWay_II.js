/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const MOD = 1e9 + 7;
    /* 
        - digit is one
            - * 

            - digits without 0 

        - two digit
            - does not start with *
                - start with 1
                    - the last e is * 
                    - digit

                - 2 
                   - the last e is * 
                    - digit

            - start with *
                - end with *

                - 0<= X < 6 

                - 7 < X< 10 
             
    */
    const n = s.length
    if (n === 0 || s[0] === "0") return 0;
    const dp = new Array(n + 1).fill(0)
    dp[0] = 1;
    dp[1] = s[0] === '*' ? 9 : 1;

    for(let i = 2; i <= n; i++){
        const one = s[i - 1];
        const two = s.slice(i - 2, i);

        if (one === '*') dp[i] += dp[i - 1] * 9
        else if(one !== "0") dp[i] += dp[i - 1]
        dp[i] %= MOD

        if (two[0] !== "*"){
            if (two[0] === "1"){
                if(two[1] === "*"){
                    dp[i] += dp[i - 2] * 9

                }else{
                     dp[i] += dp[i - 2] 
                }
            }
            else if(two[0] === "2"){

                if (two[1] === "*"){
                    dp[i] += dp[i - 2] * 6

                }else if("0" <= two[1] && two[1] <= "6"){
                    dp[i] += dp[i - 2]
                }
            }
        }else{
            if(two[1] === "*"){
                dp[i] += dp[i - 2] * 15
            }
            else if(two[1] >= '0' && two[1] <= '6'){
                dp[i] += dp[i - 2] * 2
            }
            else if(two[1] >= '7' && two[1] <= '9') {
                dp[i] += dp[i - 2]
            }
        }
        dp[i] %= MOD
    }
    return dp[n]
};
