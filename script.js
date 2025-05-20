// Declaration of all the necessary variables.

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialchar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
    ":", ";", "<", "=", ">", "?", "@",
    "[", "\\", "]", "^", "_", "`",
    "{", "|", "}", "~"];

let leninput = document.querySelector(".inlength");
const upper = document.getElementById("Uppercase");
const lower = document.getElementById("Lowercase");
const num = document.getElementById("Numbers");
const special = document.getElementById("SpecialChar");
const showpass = document.querySelector(".showpass");
const output = document.querySelector(".output");

//Event Listener when Generate button is clicked.
let generate = document.querySelector(".btn");
generate.addEventListener("click", () => {
    let result = [];
    let bucket = [];
    len = parseInt(leninput.value);

    //Collect the arrays into the bucket which are selected by the user.
    if (upper.checked) {
        bucket = bucket.concat(uppercase)
    }
    if (lower.checked) {
        bucket = bucket.concat(lowercase)
    }
    if (num.checked) {
        bucket = bucket.concat(numbers)
    }
    if (special.checked) {
        bucket = bucket.concat(specialchar)
    }

    //Fallback condition.
    if (bucket.length === 0) {
        output.innerText = "Please select at least one checkbox.";
        return;
    }

    //Fallback condition.
    if (len <= 0) {
        output.classList.remove("veryweak", "strong", "weak");
        output.innerText = "Please enter the length of the password.";
        return;
    }//Showcase whether yout password is very weak, weak or strong. 
    else if (len <= 8) {
        output.classList.remove("weak", "strong");
        output.classList.add("veryweak");
        showpass.innerHTML = "<b>!Very Weak Password.</b>"
    }
    else if (len <= 12) {
        output.classList.remove("veryweak", "strong");
        output.classList.add("weak");
        showpass.innerHTML = "<b>!Weak Password.</b>"
    }
    else {
        output.classList.remove("weak", "veryweak");
        output.classList.add("strong");
        showpass.innerHTML = "<b>Strong Password!!</b>"
    }

    for (let i = 0; i < len && i < 50; i++) {
        let random = Math.floor(Math.random() * bucket.length);
        result.push(bucket[random]);
    }

    output.innerText = result.join('');
})
