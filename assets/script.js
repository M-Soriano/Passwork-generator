// Assignment code here

function generatePassword(){
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
  var upperletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialletters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '+'];
  var passwordlength = prompt('How many character do you want in password? (Must be between 8 and 128)');
  
    while (passwordlength <8 || passwordlength > 128){
      passwordlength = prompt('How many character do you want in password? (Must be between 8 and 128)');
    }

    
  
  

  


 

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
