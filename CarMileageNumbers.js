function isInteresting(number, awesomePhrases) {
    function check (num) {
        const str = String(num);

        if(num <= 99) return false;

        // all zeroes after first digit
        if(/^[1-9]0+$/.test(str)) return true;

        // all digits the same
        if(/^(\d)\1+$/.test(str)) return true;

        // Incrementing
        const incSeq = `1234567890`;
        if(incSeq.includes(str)) return true;

        // Decrementing
        const decSeq = '9876543210';
        if(decSeq.includes(str)) return true;

        // Palindrome
        if(str.split('').reverse().join('') === str) return true;

        if(awesomePhrases.includes(num)) return true;

        return false;
    }

    if (check(number)) return 2;
    if(check(number + 1) || check(number + 2)) return 1;
    return 0;
}

let number = 30;
let awesomePhrases = [1337, 256]

console.log(isInteresting(number, awesomePhrases))