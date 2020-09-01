// Assignment Code
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');
var lowercase = false;
var uppercase = false;
var number = false;
var special = false;
var length = 0;
var password = '';

function writePassword() {
    questions();

    generatePassword();

    passwordText.value = password;
}

// Start by gathering all of the information you need (length and types of characters)
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

// Functions to generate random characters for each type selected by user
// Function to get lowercase letters
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Function to get lowercase letters
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Function to get numbers
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Function to get special characters
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

function generatePassword() {
    for (i = 0; i < length; i++) {
        password += passGen(lowercase, uppercase, number, special);
    }
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);