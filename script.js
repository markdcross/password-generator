// Assignment Code
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');
var copyBtn = document.querySelector('#copy');

// Questions are asked via a prompt and several confirms to determine what password criteria to use
function lengthFunc() {
    // Prompt for length of password (8-128)
    var length = 0;
    length = prompt(
        'How long would you like your Password to be (must be between 8-128)?'
    );

    // Validation
    if (length == null) {
        return;
    }
    if (length < 8 || length > 128) {
        alert('Password length must be between 8-128 characters');
        return writePassword();
    }
    return length;
}

function questions(length) {
    // Confirms for types of characters to be used(lowercase, uppercase, numeric, special)
    var lowercase = confirm(
        'Do you want lowercase letters (OK for yes, Cancel for no)?'
    );
    var uppercase = confirm(
        'Do you want uppercase letters (OK for yes, Cancel for no)?'
    );
    var number = confirm('Do you want numbers (OK for yes, Cancel for no)?');
    var special = confirm(
        'Do you want special characters (OK for yes, Cancel for no)?'
    );

    // Validation alert and restart questions
    if (!lowercase && !uppercase && !number && !special) {
        alert('You muse select at least one criteria');
        return writePassword();
    }

    // Uses the information collected above to generate a random password based on the selected criteria
    generatePassword(lowercase, uppercase, number, special, length);
}

// Generates random characters for each character type selected by user
// Generates lowercase letters
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Generates uppercase letters
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// Generates numbers
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Generates special characters
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
function generatePassword(lowercase, uppercase, number, special, length) {
    for (var i = 0; i < length; i++) {
        password += passGen(lowercase, uppercase, number, special);
    }
}

// Calls functions to create and display password when button is clicked
function writePassword() {
    password = '';
    // Asks users for length of password
    var length = lengthFunc();

    // If length criteria not met, exit password creation process
    if (!length) {
        return;
    }

    // Asks users the criteria questions and records answers
    questions(length);

    // Returns password to text area
    passwordText.value = password;
}

function copyPassword() {
    var copyText = document.getElementById('password');
    copyText.select();
    document.execCommand('copy');
    alert('Copied the password: ' + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// Add event listener to copy button
copyBtn.addEventListener('click', copyPassword);
