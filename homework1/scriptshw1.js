/* Jayden Pickin
Oct-26-2025
Javascript File*/

const currentDate = new Date(year,month,date)

const fnameinput = document.getElementById("fname");
const mInitialinput = document.getElementById("mInitial");
const lnameinput = document.getElementById("name");
const dateOfBirthinput = document.getElementById("dateOfBirth");
const socialSecurityinput = document.getElementById("socialSecurity");
const addressLine1input = document.getElementById("addressLine1");
const addressLine2input = document.getElementById("addressLine2");
const cityinput = document.getElementById("city");
const stateinput = document.getElementById("state");
const zipcodeinput = document.getElementById("zipcode");
const emailinput = document.getElementById("email");
const currentSymptomsinput = document.getElementById("currentSymptoms");
const painLocationinput = document.getElementById("painLocation");
const hairColorinput = document.getElementById("hairColor");
const heardOfUsinput = document.getElementById("heardOfUs");
const drinksPerWeekinput = document.getElementById("drinksPerWeek");
const userIdinput = document.getElementById("userId");
const passwordinput = document.getElementById("password");
const password2input = document.getElementById("password2);

const letterApostDashChars = /^[A-Za-z'’-]+(?: [A-Za-z'’-]+)*$/;
const NumDashOnly = /^[123457890-]+(?: [123457890-]+)*$/;
const lettersOnly = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userIDFormat = /^[A-Za-z1234567890_-]+[A-Za-z1234567890_-]+$/;
const passwordFormat = /^(?=.*[0-9])(?=.*[!@#%^&*()-_+=\/><.,`~])(?=.*[A-Za-z])

function lengthAllowed(input,maxLength,minLength){
  if(input.length>maxLength){
    return False
  }
  else if(input.length<minLength){
    return True
  }
  else{
    return False
  }
}

function checkfname(){
  const fnameValue = fnameInput.value.trim();
  if(fnameValue.length>0){
    if(lengthAllowed(fnameValue,30,1){
      document.getElementById("fnameError").innerHTML="NOT ALLOWED--Too Long";
    }
    else if(letterApostDashChars.test(fnameValue)){
      document.getElementById("fnameError").innerHTML="Allowed";
    }
    else{
      document.getElementById("fnameError").innerHTML="NOT ALLOWED--Letters, Apostrophes, and Dashes only";
    }
}

function checkmInitial(){
  const mInitialValue = mInitialInput.value.trim();
  if(lettersOnly.test(mInitialValue)){
    document.getElementById("mInitialError").innerHTML="Allowed";
  }
  else{
    document.getElementById("mInitialError").innerHTML="NOT ALLOWED--Letters only";
  }
}
  
function checklname(){
  const lnameValue = lnameInput.value.trim();
  if(lnameValue.length>0){
    if(lengthAllowed(lnameValue,30,1){
      document.getElementById("lnameError").innerHTML="NOT ALLOWED--Too Long";
    }
    else if(letterApostDashNumChars.test(lnameValue)){
      document.getElementById("lnameError").innerHTML="Allowed";
    }
    else{
      document.getElementById("lnameError").innerHTML="NOT ALLOWED--Letters, Apostrophes, 2-5, and Dashes only";
    }
}
  
function checkdateOfBirth(){
  const today = new Date();
  const old = today.setFullYear(today.getFullYear()+120)
  
  if(dateOfBirthInput > today){
    document.getElementById("dOBError").innerHTML="Allowed";
  }
  else if(dateOfBirthInput > old){
    document.getElementById("dOBError").innerHTML="NOT ALLOWED--Must be younger than 120";
  }
  else{
    document.getElementById("dOBError").innerHTML="NOT ALLOWED--Must be born already";
  }
}

function checksocialSecurity(){
  const socialSecurityValue = socialSecurityInput.value.trim();
  
  if(NumDashOnly.test(socialSecurityValue)){
    document.getElementById("socialSecurityError").innerHTML="Allowed";
  }
  else{
    document.getElementById("socialSecurityError").innerHTML="NOT ALLOWED--Numbers and Dashes only";
  }
}

function checkaddressLine1(){
  //no check needed
  if(addressLine1Value.length>0){
    if(lengthAllowed(addressLine1Value,30,2){
      document.getElementById("addressLine1Error").innerHTML="NOT ALLOWED--Limited to 2-30 characters";
    }
    else{
      document.getElementById("addressLine2Error").innerHTML="Allowed";
    }
  }
}
function checkaddressLine2(){
  //no check needed
  if(addressLine2input.length>0){
    if(lengthAllowed(addressLine2Value,30,2){
      document.getElementById("addressLine2Error").innerHTML="NOT ALLOWED--Limited to 2-30 characters";
    }
    else{
      document.getElementById("addressLine2Error").innerHTML="Allowed";
    }
  }
}
  
function checkcity(){
  if(cityinput.length>0){
    if(lengthAllowed(cityValue,30,2){
      document.getElementById("cityError").innerHTML="NOT ALLOWED--Limited to 2-30 characters";
    }
    else{
      document.getElementById("cityError").innerHTML="Allowed";
    }
  }
}
  
function checkstate(){
  if(stateinput=="ERRORBADNOEVILDONTDOTHISONE"){
    document.getElementById("stateError").innerHTML="NOT ALLOWED--Please Select a Valid Option";
  }
  else{
    document.getElementById("stateError").innerHTML="Allowed";
  }
}
  
function checkzipcode(){
  const zipcodeValue = zipcodeInput.value.trim();
  if(zipcodeinput.length>0){
    if(NumDashOnly.test(socialSecurityValue)){
      if(lengthAllowed(zipcodeValue,30,2){
        document.getElementById("zipcodeError").innerHTML="NOT ALLOWED--Limited to 5-10 numbers";
      }
      else{
        document.getElementById("zipcodeError").innerHTML="Allowed";
      }
    }
    else{
      document.getElementById("socialSecurityError").innerHTML="NOT ALLOWED--Numbers and Dashes only";
    }
  }
}
  
function checkemail(){
  if(emailInput.length>0){
    if(emailFormat.test(emailInput)){
      document.getElementById("emailError").innerHTML="Allowed";
    }
    else{
      document.getElementById("emailError").innerHTML="NOT ALLOWED--Invalid Format";
    }
  }
}
  
function checkcurrentSymptoms(){
  if(currentSymptomsInput.inclues('"'){
    document.getElementById("emailError").innerHTML='NOT ALLOWED--" Is not allowed';
  }
}
  
function checkpainLocation(){
  //not needed right now
}
  
function checkhairColor(){
  //not needed right now
}
  
function checkheardOfUs(){
  //not needed right now
}
  
function checkdrinksPerWeek(){
  //not needed right now
}
  
function checkuserId(){
  if(userIDInput.length>0){
    if(userIDFormat.test(userIDInput)){
      if(lengthAllowed(userIDInput,5,30){
         document.getElementById("userIDError").innerHTML="Allowed";
      }
      else{
        document.getElementByID("userIDError").innerHTML="NOT ALLOWED--Invalid Length 5-30 characters")
      }
    }
    else{
      document.getElementById("userIDError").innerHTML="NOT ALLOWED--Must be letter, number or dashes";
    }
  }
}
  
function checkpassword(){
  if(passwordInput.length>0){
    if(passwordFormat.test(passwordInput)){
      if(lengthAllowed(passwordInput,8,30){
         document.getElementById("passwordFormatError").innerHTML="Allowed";
      }
      else{
        document.getElementByID("passwordFormatError").innerHTML="NOT ALLOWED--Invalid Length 8-30 characters")
      }
    }
    else{
      document.getElementById("passwordFormatError").innerHTML="NOT ALLOWED--Must be letter, number or dashes";
    }
  }
}

function checkpasswordmatch(){
  if(passwordInput==password2Input){
    document.getElementById("password2Error").innerHTML="Passwords Don't match";
  }
}

