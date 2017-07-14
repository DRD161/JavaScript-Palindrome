function palindrome(str) {
    var Regex = str.replace(/[\W_]/gi, '').toLowerCase();
    var revString = Regex.split('').reverse().join('');

    if (revString === Regex) {
        return true;

    } else {

        return false;
    }
}

palindrome("race car");