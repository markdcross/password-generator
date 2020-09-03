// Assignment Code
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');
var copyBtn = document.querySelector('#copy');
var password = '';

// Creates and displays password when button is clicked
function writePassword() {
    password = '';
    // Asks users the criteria questions and records answers
    questions();

    // Uses the information collected in Questions to generate a random password based on the selected criteria
    generatePassword();

    // Returns password to text area
    passwordText.value = password;
}

function copyPassword() {
    var copyText = document.getElementById('password');
    copyText.select();
    document.execCommand('copy');
    alert('Copied the text: ' + copyText.value);
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
        return;
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
    if (lowercase) {
        passwordArr.push([getRandomLower()]);
    }
    if (uppercase) {
        passwordArr.push([getRandomUpper()]);
    }
    if (number) {
        passwordArr.push([getRandomNumber()]);
    }
    if (special) {
        passwordArr.push([getRandomSpecial()]);
    }
    return passwordArr[Math.floor(Math.random() * passwordArr.length)];
}

// Loop the character generation over the length of the password
function generatePassword() {
    for (var i = 0; i < length; i++) {
        password += passGen(lowercase, uppercase, number, special);
    }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// Add event listener to copy button
copyBtn.addEventListener('click', copyPassword);
