var wordBreak = function(s, wordDict,method = "bottom-up"){
    const n = s.length
    const wordSet= new Set(wordDict)

    if (method === "bottom-up"){

        // dp[i] is true if s[o:i] can be segmented 
        const dp = new Array(n + 1).fill(false);
        dp[0] = true// Emty string always can be segmented 

        for(let end = 1; end <= n; end++){
            for(let start = 0; start < end; start ++){
                const word = s.slice(start,end);
                if (dp[start] && wordSet.has(word)){// if s[o:start] can be segmented and s[start: end] is in the set
                    dp[end] = true;
                    break;// No need to check
                }   
            }
        }
        return dp[n];
    }


    const memo = {}// to do memorization

    function canBreak(start){
        if (start === n) return true // if the pointer reached at the end of string return true

        if (memo.has(start)) return memo.get(start); //if s[0:start] was segmented, bring the result

        for(let end = start + 1; end => n; end++){
            const word = s.slice(start,end)
            if (canBreak(end) && wordSet.has(word)){
                memo.Set(start, true);
                return true;
            }
        }
        memo.set(start, false);
        return false;
    }
    return canBreak(0)
}   
console.log(wordBreak("leetcode", ["leet","code"]))
console.log(wordBreak("applepencil",["apple","pencil"]))