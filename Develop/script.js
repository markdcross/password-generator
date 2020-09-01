// Assignment Code
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');
var copyBtn = document.querySelector('#copy');
var lowercase = false;
var uppercase = false;
var number = false;
var special = false;
var length = 0;
var password = '';

// Event listener to generate password on click
generateBtn.addEventListener('click', writePassword);

// Creates and displays password when button is clicked
function writePassword() {
    questions();

    generatePassword();

    passwordText.value = password;
}

// Internal functions that power writePassword()

// Questions to determine what password criteria to use
function questions() {
    // Prompt for length of password (8-128)
    length = +prompt(
        'How long would you like your Password to be (must be between 8-128)?'
    );
    // Validation
    if (length < 8 || length > 128) {
        alert('Password length must be between 8-128 characters');
        questions();
    }

    // Confirms for types (lowercase, uppercase, numeric, special)
    lowercase = confirm('Do you want lowercase letters?');
    uppercase = confirm('Do you want uppercase letters?');
    number = confirm('Do you want numbers?');
    special = confirm('Do you want special characters?');
    // Validation
    if (
        lowercase === false &&
        uppercase === false &&
        number === false &&
        special === false
    ) {
        alert('You muse select at least one criteria');
        questions();
    }
}

// Generates random characters for each type selected by user
// Gets lowercase letters
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Gets uppercase letters
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Gets numbers
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Gets special characters
function getRandomSpecial() {
    const specialChar = '!@#$%^&*()_+';
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

// Populate password character array based on user input
function passGen(lowercase, uppercase, number, special) {
    var passwordArr = [];
    if (lowercase === true) {
        passwordArr.push([getRandomLower()]);
    }
    if (uppercase === true) {
        passwordArr.push([getRandomUpper()]);
    }
    if (number === true) {
        passwordArr.push([getRandomNumber()]);
    }
    if (special === true) {
        passwordArr.push([getRandomSpecial()]);
    }
    return passwordArr[Math.floor(Math.random() * passwordArr.length)];
}

// Loop the character generation over the length of the password
function generatePassword() {
    for (i = 0; i < length; i++) {
        password += passGen(lowercase, uppercase, number, special);
    }
}

// Event listener to copy password on click
copyBtn.addEventListener('click', copyPassword);

// Copies password
function copyPassword() {
    var copyText = document.getElementById('password');
    copyText.select();
    document.execCommand('copy');
    alert('Copied the text: ' + copyText.value);
}
