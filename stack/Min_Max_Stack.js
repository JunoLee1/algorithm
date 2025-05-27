class Stack {
    constructor(){
        this.mainStack = [];
        this.min_Max_Stack = [];
    }

    push(val){
        let min = val; 
        let max = val; 

        if (this.min_Max_Stack.length > 0){
            const last_Min_Max = this.min_Max_Stack[this.min_Max_Stack.length - 1];
            min = Math.min(val,last_Min_Max.min);
            max = Math.max(val,last_Min_Max.max);
        }
        this.mainStack.push(val);
        this.min_Max_Stack.push({min, max});

    }
    pop(){
        this.min_Max_Stack.pop()
        return this.mainStack.pop()
    }

    peak(){
        return this.mainStack[this.mainStack.length - 1]// O(1)
    }

    getMin(){
        return this.min_Max_Stack[this.min_Max_Stack.length -1].min
    }
    getMax(){
        return this.min_Max_Stack[this.min_Max_Stack.length - 1].max
    }
}

// space complexity is O(n) this is because both of min and max stack tend to save "n" times factors.
// time complexity is O(n) runs in constant time


