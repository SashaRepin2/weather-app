function CheckPalindrome(string) {

    string = string.toLowerCase();

    return string === string.split("").reverse().join("");
}

function FizzBuzz(value) {
    if (value <= 0) {
        console.log("Число меньше 1");
        return;
    }

    for (let i = 1; i < value; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        }
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        else {
            console.log(i);
        }
    }
}

function Anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    return str1.split('').sort() === str2.split('').sort();
}


function Fibonnaci(value) {

    if (!value || value === 1)
        return 0;

    if (value === 2)
        return 1;

    return Fibonnaci(value - 1) + Fibonnaci(value - 2);


}

// FizzBuzz(5);
// console.log(CheckPalindrome("qeq"));
console.log(Anagram("finder", "Friend"));
console.log(Fibonnaci(0))