// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var finalProduct = "";
  var placeholder = 0;
  var other = 0;
  var badLength = true;
  var passwordLength = 0;
  var count = 0;
  while(badLength){
    passwordLength = prompt("How much characters would you like your password to be.");
    if(passwordLength < 8){
      alert("Password too short, password should be at least 8 characters long");
    }
    else if(passwordLength > 128){
      alert("Password too long, password can't be longer than 128 characters");
    }
    else if (passwordLength > 7 && passwordLength < 129){
      alert("The password will be " + passwordLength + " characters long");      
      badLength = false;      
    }
    else{
      alert("Please provide a number value");
    }
  }
  while(count < 1){
    var lowercase = confirm("Would you like your password to contain lowercase characters?");
    if(lowercase){
      count++;
      alert("Your password will have lowercase characters.");
    }
    var uppercase = confirm("Would you like your password to contain uppercase characters?");
    if(uppercase){
      count++;
      alert("Your password will have uppercase characters.");
    }
    var nums = confirm("Would you like your password to contain numbers?");
    if(nums){
      count++;
      alert("Your password will have numbers.");
    }
    var special = confirm("Would you like your password to contain special characters?");
    if(special){
      count++;
      alert("Your password will have special characters.");
    }
    if(count < 1){
      alert("You have to select at least one option");
    }
  }



  if(count === 4){
    for(var i = 0; i < passwordLength; i++){
      placeholder = Math.floor(Math.random() * (90) + 33)
      finalProduct += String.fromCharCode(placeholder);
    }
  }  



  if(count === 1){
    if(lowercase){
      for(var i = 0; i < passwordLength; i++){
        placeholder = Math.floor(Math.random() * (26) + 97)
        finalProduct += String.fromCharCode(placeholder);
      }
    }
    if(uppercase){
      for(var i = 0; i < passwordLength; i++){
        placeholder = Math.floor(Math.random() * (26) + 65)
        finalProduct += String.fromCharCode(placeholder);
      }
    }
    if(nums){
      for(var i = 0; i < passwordLength; i++){
        placeholder = Math.floor(Math.random() * (10) + 48)
        finalProduct += String.fromCharCode(placeholder);
      }
    }
    if(special){
      for(var i = 0; i < passwordLength; i++){
        placeholder = Math.floor(Math.random() * (15) + 33)
        finalProduct += String.fromCharCode(placeholder);
      }
    }
  }



  if(count ===2){

    if(lowercase && uppercase){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 2);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (26) + 97)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (26) + 65)
          finalProduct += String.fromCharCode(placeholder);
        }
      }
    }
    if(lowercase && nums){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 2);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (26) + 97)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (10) + 48)
          finalProduct += String.fromCharCode(placeholder);
        }
      }
    }
    if(lowercase && special){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 2);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (26) + 97)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (15) + 33)
          finalProduct += String.fromCharCode(placeholder);
        }
      }
    }

    if(uppercase && nums){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 2);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (26) + 65)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (10) + 48)
          finalProduct += String.fromCharCode(placeholder);          
        }
      }
    }
    if(uppercase && special){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 2);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (26) + 65)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (15) + 33)
          finalProduct += String.fromCharCode(placeholder);
        }
      }
    }

    if(nums && special){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 2);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (10) + 48)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (15) + 33)
          finalProduct += String.fromCharCode(placeholder);
        }
      }
    }
  }



  if(count === 3){

    if(lowercase && uppercase && nums){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 3);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (26) + 97)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (26) + 65)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 2){
          placeholder = Math.floor(Math.random() * (10) + 48)
          finalProduct += String.fromCharCode(placeholder); 
        }
      }
    }
    if(lowercase && uppercase && special){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 3);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (26) + 97)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (26) + 65)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 2){
          placeholder = Math.floor(Math.random() * (15) + 33)
          finalProduct += String.fromCharCode(placeholder);
        }
      }
    }
    if(lowercase && nums && special){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 3);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (26) + 97)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (10) + 48)
          finalProduct += String.fromCharCode(placeholder); 
        }
        if(other === 2){
          placeholder = Math.floor(Math.random() * (15) + 33)
          finalProduct += String.fromCharCode(placeholder);
        }
      }
    }
    if(uppercase && nums && special){
      for(var i = 0; i < passwordLength; i++){
        other = Math.floor(Math.random() * 3);
        if(other === 0){
          placeholder = Math.floor(Math.random() * (26) + 65)
          finalProduct += String.fromCharCode(placeholder);
        }
        if(other === 1){
          placeholder = Math.floor(Math.random() * (10) + 48)
          finalProduct += String.fromCharCode(placeholder); 
        }
        if(other === 2){
          placeholder = Math.floor(Math.random() * (15) + 33)
          finalProduct += String.fromCharCode(placeholder);
        }
      }
    }
  }

  console.log(finalProduct);
  

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = finalProduct;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
