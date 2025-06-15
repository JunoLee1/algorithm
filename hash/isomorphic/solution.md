# Problem name:


## Problem url


## Problem definition:
    return true if number of each s_string and each t_string 

## Approach:
    hash set


{
    e: a
    g: d
    g: d
}
    ===
{
    a: e,
    d: g,
    d: g
}



## code
 
```js
var isIsomorphic = function(s, t){

    // storage
    const s_map = new Map();
    const t_map = new Map();


    if(s.length !== t.length) return false;


    // if char_s has difference with s's storage data return false
    for (let i = 0; i < s.length; i++){

        let char_s = s[i];
        let char_t = t[i];

        
        if (s_map.has(char_s)){
            if(s_map.get(char_s) !== char_t) return false;

        }else{
            s_map.set(char_s, char_t)
        }

        if(t_map.has(char_t)){
            if(t_map.get(char_t) !== char_s) return false;

        }else{
            t_map.set(char_t, char_s)
        }
    }

    return true
}
// 