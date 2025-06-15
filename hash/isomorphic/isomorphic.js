/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // problem def: return true if number of each s_string and each t_string 
    
    /* storage */
    const s_map = new Map();
    const t_map = new Map();

    /*base case */
    if(s.length !== t.length) return false;


    for(let i = 0; i < s.length; i++){
        let char_s = s[i];
        let char_t = t[i];

        if (s_map.has(char_s)){
            //if s_map does  have char_s,//if char_s !== char_t, return false
            if (s_map.get(char_s) !== char_t) return false;

        }else{
            s_map.set(char_s, char_t)

        }

        if(t_map.has(char_t)){
            // if char_t !== char_s, return false.
            if(t_map.get(char_t) !== char_s) return false;
        }
        // if t_map doesnt have char_t, set char_t and char_s.
        else{
            t_map.set(char_t, char_s)
        }
        
        // if t_map doesnt have char_t, set char_t and char_s.

    }
    return true // all pass
}