var groupAnagrams = function(strs) {
    /**
     * Problem definition
        
        - Definition of Anagram
            =>The anagram is rearrangement of the letter of the word. 


    * Approaching
        - Create the common key for each word by sorting its letters.
            -> this sorting makes to group efficiently. 

        - Use a map to collect word  by their sorted key 

        - If the key does not exist in the map, initialize it as an emty array.

        - push the current word into the array corresponding to the key.

        - return the array which is consisted with the values of map 
     */


    // storage 
    const map = new Map() 

    for(let word of strs){

        // Make a common key
        const key = word.split('').sort().joint('')

        // if the key doesnt exist in map, initialise it as an empty array.
        if (!map.has(key)){
            map.set(key, [])
        }

        map.get(key).push(word);

    }
    return Array.from(map.values())

}