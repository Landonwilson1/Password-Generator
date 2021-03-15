// Password Generator 
// This code will provide a random password 
// between 8-128 characters. User will promted 
// special, numeric, upper, and lowercase vaules.


//Assignment and listener code consolidated
document.querySelector("#generate").addEventListener("click", writePassword);


//User inputs variables
var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
//end user input variables

//password array values
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = ["0","1", "2", "3", "4" , "5", "6", "7", "8", "9"];
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//end variable values

//function for random password
function generatePassword() {
  //user input 
  var confirmLength = (prompt("How many characters would you like your password to be?"));
  //while loop to determine length of passwords
  //checks if password is within parameters
  while(confirmLength < 8 || confirmLength > 128) {
      alert("password length must be between 8-128 try again");
      var confirmLength = (prompt("How many characters would you like your password to be?"));
      }

    //prompts for user to determine password
    var confirmUpper = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmLower = confirm("Click OK to confirm if you would like to include uppercase characters");
    var confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");

      //while loop to check if at least one parameter has been checked
      while(confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSpecial === false) {
        alert("You must choose at least one parameter");
        var confirmUpper = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmLower = confirm("Click OK to confirm if you would like to include uppercase characters");
        var confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
        
      }

      //empty variable to have password values added to it
      var passwordCharacters = []


      //if else statements to add values based of the users input
      if (confirmLower) {
        passwordCharacters = passwordCharacters.concat(lower)
      }

      if (confirmUpper) {
        passwordCharacters = passwordCharacters.concat(upper)
      }

      if (confirmNumber) {
        passwordCharacters = passwordCharacters.concat(number)
      }

      if (confirmSpecial) {
        passwordCharacters = passwordCharacters.concat(special)
      }

    //memory for passwordCharacters
    console.log(passwordCharacters)

    //empty string for random password generator in function to be returned
    var randomPassword =""

    //loop in order to make length of password with values
    for (var i = 0; i < confirmLength; i++) {
      //consolidate code by placing math.random in function
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }

    //random password returned to global 
    return randomPassword;
}

//password code to #password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


