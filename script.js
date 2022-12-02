// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  // Created a function for password length validation

let passwordValidation = (userInput) => {
    if (userInput === "") {
      alert('Cancel pressed. Please Re-try')
      return false;
    } else if (userInput < 10 || userInput > 64) {
      alert('Re-try again. Selection needs to between numbers, 10 - 64')
      return false;
    } else if (isNaN(userInput)) {
      alert('Numeric input only allowed')
      return false;
    }
    return true;
  
  };

  // Function for User password options and Random Element
let userSelectionInput = (passwordLength) => {
    let passwordArray = [];
    let isLow = confirm("Would you like to include lower case letters?");
    let isUp = confirm('Would you like to include upper case letters?');
    let isNum = confirm('Would you like to include numbers?');
    let isSpec = confirm('Would you like to include special characters?');
  
    let randomSelectionArray = []
  
    // If no option is selected
    if (!isLow && !isUp && !isNum && !isSpec) {
      alert('You must select at least one option')
      return false;
  
    } else if (isLow && isUp && isNum && isSpec) {
      
      //Four options true.
      randomSelectionArray = randomSelectionArray.concat(lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters)
  
      //Three options true.
    } else if (isLow && isUp && isNum) {
      randomSelectionArray = randomSelectionArray.concat(lowerCasedCharacters, upperCasedCharacters, numericCharacters);
    } else if (isLow && isUp && isSpec) {
      randomSelectionArray = randomSelectionArray.concat(lowerCasedCharacters, upperCasedCharacters, specialCharacters);
    } else if (isLow && isNum && isSpec) {
      randomSelectionArray = randomSelectionArray.concat(lowerCasedCharacters, numericCharacters, specialCharacters);
    } else if (isUp && isNum && isSpec) {
      randomSelectionArray = randomSelectionArray.concat(upperCasedCharacters, numericCharacters, specialCharacters);
  
      //Two options true.
    } else if (isLow && isUp) {
      randomSelectionArray = randomSelectionArray.concat(lowerCasedCharacters, upperCasedCharacters);
    } else if (isLow && isNum) {
      randomSelectionArray = randomSelectionArray.concat(lowerCasedCharacters, numericCharacters);
    } else if (isLow && isSpec) {
      randomSelectionArray = randomSelectionArray.concat(lowerCasedCharacters, specialCharacters);
    } else if (isUp && isSpec) {
      randomSelectionArray = randomSelectionArray.concat(upperCasedCharacters, specialCharacters);
    } else if (isUp && isSpec) {
      randomSelectionArray = randomSelectionArray.concat(upperCasedCharacters, specialCharacters);
    } else if (isNum && isSpec) {
      randomSelectionArray = randomSelectionArray.concat(numericCharacters, specialCharacters);
    } else if (isUp && isNum) {
      randomSelectionArray = randomSelectionArray.concat(upperCasedCharacters, numericCharacters);
  
  
      //One option true.
    } else if (isLow) {
      randomSelectionArray = randomSelectionArray.concat(lowerCasedCharacters);
    } else if (isUp) {
      randomSelectionArray = randomSelectionArray.concat(upperCasedCharacters);
    } else if (isNum) {
      randomSelectionArray = randomSelectionArray.concat(numericCharacters);
    } else if (isSpec) {
      randomSelectionArray = randomSelectionArray.concat(specialCharacters);
    }
   
    for (var i = 0; i < passwordLength; i++) {
      let randomCharacter = Math.floor(Math.random() * randomSelectionArray.length);
      passwordArray.push(randomSelectionArray[randomCharacter])
    }
    // Code below remove commas and quotation marks.
    return passwordArray.join("");
  }

// Function to generate password with user input
let generatePassword = () => {
    let passwordLength = prompt('Please enter a numerical password length that is between 10 and 64 characters long')
    if (passwordValidation(passwordLength)) {
      return (userSelectionInput(passwordLength))
    } else {
      console.log('Invalid Selection')
    }
  
  }

  // Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);