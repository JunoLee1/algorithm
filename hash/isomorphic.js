/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    /*** storage ***/
    let map_s = new Map();
    let map_t = new Map();

    /*** edge case***/
    if (s.length !== t.length){
        return false;
    }

    for (let i = 0; i <s.length; i++){
        let char_s = s[i];
        let char_t = t[i];

        if (map_s.has(char_s)){ // if matched value is in map
            if(map_s.get(char_s) !== char_t){ //find wrong match
                return false;
            }

        }else{
            map_s.set(char_s, char_t);
        }

        if (map_t.has(char_t)){
            if (map_t.get(char_t) !== char_s){
                return false;
            }
        }else{
            map_t.set(char_t, char_s);
        }
    }

    return true;// if all pass

}
console.log(isIsomorphic("kaka", "jaja"));  // true
console.log(isIsomorphic("foo", "bar"));    // false
console.log(isIsomorphic("egg", "add"));    // true
console.log(isIsomorphic("paper", "title")); // true