var subarraySum = function(nums, k) {
    // sum(i,j) === k
    // sum(i, j) === prefix(j) - prefix(i) ===> k = prefix(j) - prefix(i) ===> prefix(j) - k = prefix(i)
    const prefixMap = new Map();
    let cnt = 0 
    let crnt_sum = 0
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        crnt_sum += num;

        if(prefixMap.has(crnt_sum - k)){
            cnt += prefixMap.get(crnt_sum - k)
        }
        prefixMap.set(crnt_sum, (prefixMap.get(crnt_sum)|| 0) + 1)

    }
    return cnt;
}