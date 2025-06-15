class RandomisedHashSet{

    constructor(){
        this.list = [];
        this.map = new Map();

        /** function */

        //push
        function insert(val){
            if(this.map.has(val)) return false;
            this.map.set(val);
            this.list.push(val, this.list.length - 1);
            return true;
        }
        function remove(val){
            if(!this.map.has(val)) return true;
            
            const last = this.list.length - 1;
            const idx = this.map.get(val);

            this.list[idx]  = this.list[last]; // the index place save last one
            this.list.pop();
            this.map.remove(val);

            return false
        }

        function getRandom(){
            const randomIdx = Math.floor(Math.random() * this.list.length);
            return this.list[randomIdx];
        }
    }
}