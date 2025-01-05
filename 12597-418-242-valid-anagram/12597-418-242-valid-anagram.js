/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Frequency counter
var isAnagram = function(s, t) {
    // Check if two strings length equals, return false if its not
    // Create a object to store the letter with count
    // Increament the count if the letter exist
    // Iterate the other string to check if the letter exist in the object
    // return false if its not exist
    // Decrement the count if its exist
    const S_LENGTH = s.length;
    const T_LENGTH = t.length;

    if (S_LENGTH !== T_LENGTH) {
        return false;
    }

    const lookup = {}
    for (let i=0; i<S_LENGTH; i++) {
        let letter = s[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i=0; i<T_LENGTH; i++) {
        let letter = t[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
};