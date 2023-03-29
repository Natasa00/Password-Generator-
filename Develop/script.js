// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var Usenumbers = confirm ("Would you like to include numbers?")
  var Uselowercase = confirm ("Would you like to include lower case?")
  var Useuppercase = confirm ("Would you like to include upper case?")
  var Usespecialcharacter = confirm ("Would you like to include special character?")

prompt ("Please enter how long you would like password to be.\n\nYou must enter the value between 8 and 128.")

  console.log (Usenumbers) 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
