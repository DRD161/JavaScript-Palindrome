function palindrome(str) {
    /* Replace non-alphanumeric characters as well as make them lowercase.*/
    var Regex = str.replace(/[\W_]/gi, '').toLowerCase(); 
    /* \W replaces the non-alphanumeric characters. g(is for global replacement) i(ignores case sensitivity) */
    
    /* Take the string(str)  passed to the Regex variable, split it, reverse it, then join it together.
       This algorithm splits the string to put it into an array so it cna be reversed */
    var revString = Regex.split('').reverse().join('');
    
    /* If statement to check if the reversed string matches the criteria of the Regex.
       if string passed into the palindrome function IS a palindrome, return true. */
    if (revString === Regex) {
        return true;
        
    /* If the passed in string is NOT a palindrome, return false */
    } else {

        return false;
    }
}
/* Call to the palindrome function. The string "race car" is passed in as an argument 
   in this case, the passed in string is in fact a palindrome */
palindrome("race car");
