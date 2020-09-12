# password-generator

Homework assignment to produce a random password generator using basic JavaScript (functions and loops).

![Screenshot](https://github.com/markdcross/password-generator/blob/master/assets/Screenshot%202020-09-12%20090153.png)

# Requirements

The password is based on user-selected criteria, specifically length and character types to be included. The app runs in the browser and dynamically updates the HTML and CSS via JavaScript.

# Function

When the Generate Password button is clicked, the user is prompted for their desired password length. If the user selects a value outside of the accepted length requirements (8-128 characters) or clicks cancel, the process ends and the user may choose to start again.

Once the desired length is established, the user is prompted to select the desired character types via confirm messages. The types are lowercase letters, uppercase letters, numbers, and special characters. At least one character type must be selected, or the questions start over.

Once the criteria has been established, the password is dynamically displayed in the text box in the user's browser.

The user is also provided a Copy to Clipboard button to aid in the subsequent use of the generated password. Clicking the button creates an alert to show the password copied to the clipboard
