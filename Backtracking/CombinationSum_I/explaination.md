# Problem Name: # 39 Combination Sum

## Problem definition : find all possible  where the sum equals the target.
Each number can be used repeatedly in a combination

## Approach :
    number = [1, 2, 7] targetSum = 8


                                                [1, 2, 7] sum = 0

choose = 1                           choose = 2                         choose = 7
[1, 2, 7] sum = 1                   [1, 2, 7]   sum = 2                [1, 2, 7]   sum = 7



what is next my option that i can take afer first choice?
choose = 1                  choice = 2                      choice = 7
[1, 2, 7]   sum = 2        [1, 2, 7]    sum = 3          [1, 2, 7] sum = 8  => push to result   

=> if sum > targetSum, go to other option 
=> if sum === targetSum, go to result and go to other choice.


Going to other choice, it is essential to use the Backtracking.


``` js
var sumOfCombination = function(candidates){
    const res = [];

    function BT(start, path, sum){
        if (sum > targetSum) return ; // pruning 

        if (sum === targetSum){
            res.push([...path]) // push to the res
            return ;
        }

        for (let i = start; i < candidates.length ; i++){
            path.push(candidates[i]) // choice 
            BT(start, path, sum + candidates[i])n // backtracking 
            path.pop(); //undo the choice
        }
    }
    BT(0,[],0)
    return res
}