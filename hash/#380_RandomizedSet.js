var RandomizedSet = function(){
    this.map = new Map(); //to store value and index 
    this.list = []; // to allow random access
}


RandomizedSet.prototype.insert = function(val){
    if(this.map.has(val)) return false;

    this.list.push(val);
    this.map.set(val, this.list.length - 1);// add it in last of index in array
    return true;

}

RandomizedSet.prototype.remove = function(val){
    if(!this.map.has(val)) return false;
    /*remove the value from the res array, swapping it with last element*/

    let index = this.map.get(val);
    let lastElement = this.list[this.list.length - 1];
    // swapping with last Element to get rid of avoid gap

    this.list[index] = lastElement;
    this.map.set(lastElement,index);

    // remove the access
    this.list.pop();
    this.map.delete(val);
    
    return true;

}

RandomizedSet.prototype.getRandom = function(){
    if(this.list.length === 0) return null;
    const randomIdx = Math.floor(Math.random()*this.list.length);//[1][1, 2]
    return this.list[randomIdx];
}