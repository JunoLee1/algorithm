var longestPalindromeSubseq = function(s) {
    /* 
        1. Problem definition:
            find the longest palindromic subsequence's length in s(i to j).

        2. Approaching:
            Dynamic Programming  <= Sub-sequence 

            the character of subsequence:  sub sequence  tend to keep the order, remove between characters 
                1) sub problem

                2) existence of recursion

                3) overlapping sub problem

        3. Base case:
            if s.length === 0, return 0;
            if s.length === 1, return 1;
            f(i,i) = 1;


        4. General Case:

            f(i,j) = f(i + 1, j - 1) + 2  (the case s[i] === s[j])
            f(i,j) = Math.max(f(i + 1 ,j) f(i, j - 1))

        Big index to small index
    */ 
    const length = s.length
    const dp = Array.from({length}, () => Array(length).fill(0))

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = length - 1; i >= 0; i--){
        dp[i][i] = 1 
        for (let j = i + 1; j < length; j++){
            if(s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
            dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
        }
    }
    return dp[0][length - 1]
}