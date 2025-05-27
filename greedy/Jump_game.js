var jumpGame = function(nums){
    let maximum_jump = 0; 
    const n = nums.length;
    for(let i = 0; i < n;i++){
        if(i > maximum_jump) return false;
        maximum_jump = Math.max(maximum_jump, i + nums[i]);
    }
    return maximum_jump >= n - 1;
}
console.log(jumpGame([3,2,1,1,4]));

/*
problem: return true if I can reach the end
    each element meant length of maximum jump
stratagy: bebfore I jump, check hole. And renew the maximum jump
 */

