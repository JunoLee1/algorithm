# Problem Name: #380 Leetcode 

## Definition: Implement the Randomised Hashset by O(1)

## Approach :
    If there is no value in the set add the value, return true;

    If the value does not exist in the set return false. else remove the value, return true.

    For getRandom(), return a random element from the array

## code: 
```js

class randomizedHashSet{
    constructor(){
        this.map = new Map();
        this.array = [];// to approach by O(1) timeComplexity
    }

    insert(val){
        if (!this.map.has(val)){// first case
            this.map.set(val, this.array.length); // {val : idx}
            this.array.push(val);
            return true;
        }else{
            return false
        }
    }
    remove(val){

        //delete 2 =>  [1, 2, 3] =>  [1, 3, 3] => pop the end => [1, 3]
        const last = this.array.length - 1;
        const index = this.map.get(val)
        
        if (this.map.has(val)){
            this.array[index] = this.array[last];
            this.array.pop()
            this.map.delete(val)
            return true;
        }else{
            return false
        }
    }
    getRandom(){
        const randomIdx = Math.floor(Math.random()*this.array.length)
        return this.array[randomIdx];
            }
}