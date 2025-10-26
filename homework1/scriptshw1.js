/* Jayden Pickin
Oct-26-2025
Javascript File*/

const currentDate = new Date();
const todayMonth = currentDate.getMonth() + 1; // +1 because getMonth() returns 0-11
const todayDate = currentDate.getDate();
const todayYear = currentDate.getFullYear();
const formattedDate = todayMonth + '-' + todayDate + '-' + todayYear;

const fnameInput = document.getElementById("fname");
const mInitialInput = document.getElementById("mInitial");
const lnameInput = document.getElementById("lname");
const dateOfBirthInput = document.getElementById("dateOfBirth");
const socialSecurityInput = document.getElementById("socialSecurity");
const addressLine1Input = document.getElementById("addressLine1");
const addressLine2Input = document.getElementById("addressLine2");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");
const zipcodeInput = document.getElementById("zipcode");
const emailInput = document.getElementById("email");
const currentSymptomsInput = document.getElementById("currentSymptoms");
const painLocationInput = document.getElementById("painLocation");
const hairColorInput = document.getElementById("hairColor");
const heardOfUsInput = document.getElementById("heardOfUs");
const drinksPerWeekInput = document.getElementById("drinksPerWeek");
const userIdInput = document.getElementById("userId");
const passwordInput = document.getElementById("password");
const password2Input = document.getElementById("password2");

const letterApostDashChars = /^[A-Za-z'’-]+(?: [A-Za-z'’-]+)*$/;
const letterApostDashNumChars = /^[A-Za-z'’\-0-9]+(?: [A-Za-z'’\-0-9]+)*$/;
const NumDashOnly = /^[123457890-]+(?: [123457890-]+)*$/;
const lettersOnly = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userIdFormat = /^[A-Za-z1234567890_-]+[A-Za-z1234567890_-]+$/;
const passwordFormat = /^(?=.*[0-9])(?=.*[!@#%^&*()-_+=\/><.,`~])(?=.*[A-Za-z]).+$/;

function lengthAllowed(Input,maxLength,minLength){
  if(Input.length>maxLength){
    return false
  }
  else if(Input.length<minLength){
    return false
  }
  else{
    return true
  }
}

function checkfname(){
  const fnameValue = fnameInput.value.trim();
  if(fnameValue.length>0){
    if(!lengthAllowed(fnameValue,30,1)){
      document.getElementById("fnameError").innerHTML="NOT ALLOWED--Too Long";
    }
    else if(letterApostDashChars.test(fnameValue)){
      document.getElementById("fnameError").innerHTML="Allowed";
    }
    else{
      document.getElementById("fnameError").innerHTML="NOT ALLOWED--Letters, Apostrophes, and Dashes only";
    }
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
    if(!lengthAllowed(lnameValue,30,1)){
      document.getElementById("lnameError").innerHTML="NOT ALLOWED--Too Long";
    }
    else if(letterApostDashNumChars.test(lnameValue)){
      document.getElementById("lnameError").innerHTML="Allowed";
    }
    else{
      document.getElementById("lnameError").innerHTML="NOT ALLOWED--Letters, Apostrophes, 2-5, and Dashes only";
    }
  }
}
  
function checkdateOfBirth(){
  const dob = new Date(dateOfBirthInput.value);
  const today = new Date();
  const old = today.setFullYear(today.getFullYear()+120)
  
  if(dob < today){
    document.getElementById("dOBError").innerHTML="Allowed";
  }
  else if(dob > old){
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
  if(addressLine1Input.value.length>0){
    if(!lengthAllowed(addressLine1Input.value,30,2)){
      document.getElementById("addressLine1Error").innerHTML="NOT ALLOWED--Limited to 2-30 characters";
    }
    else{
      document.getElementById("addressLine1Error").innerHTML="Allowed";
    }
  }
}

function checkaddressLine2(){
  //no check needed
  if(addressLine2Input.value.length>0){
    if(!lengthAllowed(addressLine2Input.value,30,2)){
      document.getElementById("addressLine2Error").innerHTML="NOT ALLOWED--Limited to 2-30 characters";
    }
    else{
      document.getElementById("addressLine2Error").innerHTML="Allowed";
    }
  }
}
  
function checkcity(){
  if(cityInput.value.length>0){
    if(!lengthAllowed(cityInput.value,30,2)){
      document.getElementById("cityError").innerHTML="NOT ALLOWED--Limited to 2-30 characters";
    }
    else{
      document.getElementById("cityError").innerHTML="Allowed";
    }
  }
}
  
function checkstate(){
  if(stateInput.value=="ERRORBADNOEVILDONTDOTHISONE"){
    document.getElementById("stateError").innerHTML="NOT ALLOWED--Please Select a Valid Option";
  }
  else{
    document.getElementById("stateError").innerHTML="Allowed";
  }
}
  
function checkzipcode(){
  const zipcodeValue = zipcodeInput.value.trim();
  if(zipcodeValue.length>0){
    if(NumDashOnly.test(zipcodeValue)){
      if(!lengthAllowed(zipcodeValue,30,2)){
        document.getElementById("zipcodeError").innerHTML="NOT ALLOWED--Limited to 5-10 numbers";
      }
      else{
        document.getElementById("zipcodeError").innerHTML="Allowed";
      }
    }
    else{
      document.getElementById("zipcodeError").innerHTML="NOT ALLOWED--Numbers and Dashes only";
    }
  }
}
  
function checkemail(){
  if(emailInput.value.length>0){
    if(emailFormat.test(emailInput.value)){
      document.getElementById("emailError").innerHTML="Allowed";
    }
    else{
      document.getElementById("emailError").innerHTML="NOT ALLOWED--Invalid Format";
    }
  }
}
  
function checkcurrentSymptoms(){
  if(currentSymptomsInput.value.includes('"')){
    document.getElementById("currentSymptomsError").innerHTML='NOT ALLOWED--" Is not allowed';
  }
  else{
    document.getElementById("currentSymptomsError").innerHTML='ALLOWED';
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
  if(userIdInput.value.length>0){
    if(userIdFormat.test(userIdInput.value)){
      if(lengthAllowed(userIdInput.value,5,30)){
         document.getElementById("userIdError").innerHTML="Allowed";
      }
      else{
        document.getElementById("userIdError").innerHTML="NOT ALLOWED--Invalid Length 5-30 characters";
      }
    }
    else{
      document.getElementById("userIdError").innerHTML="NOT ALLOWED--Must be letter, number or dashes";
    }
  }
}
  
function checkpassword(){
  if(passwordInput.value.length>0){
    if(passwordFormat.test(passwordInput.value)){
      if(lengthAllowed(passwordInput.value,30,8)){
         document.getElementById("password1Error").innerHTML="Allowed";
      }
      else{
        document.getElementById("password1Error").innerHTML="NOT ALLOWED--Invalid Length 8-30 characters";
      }
    }
    else{
      document.getElementById("passwordFormatError").innerHTML="NOT ALLOWED--Must be letter, number, special charater or dashes";
    }
  }
}

function checkpasswordmatch(){
  if(passwordInput.value!=password2Input.value){
    document.getElementById("password2Error").innerHTML="Passwords Don't match";
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  const dpwValue=document.getElementById("dpwDisplay")
  dpwValue.textContent=drinksPerWeekInput.value;
  
  drinksPerWeekInput.addEventListener("input",()=>{
    dpwValue.textContent=drinksPerWeekInput.value;
  });

  
  fnameInput.addEventListener("input", checkfname);
  mInitialInput.addEventListener("input", checkmInitial);
  lnameInput.addEventListener("input", checklname);
  dateOfBirthInput.addEventListener("input", checkdateOfBirth);
  socialSecurityInput.addEventListener("input", checksocialSecurity);
  addressLine1Input.addEventListener("input", checkaddressLine1);
  addressLine2Input.addEventListener("input", checkaddressLine2);
  cityInput.addEventListener("input", checkcity);
  stateInput.addEventListener("input", checkstate);
  zipcodeInput.addEventListener("input", checkzipcode);
  emailInput.addEventListener("input", checkemail);
  currentSymptomsInput.addEventListener("input", checkcurrentSymptoms);
  painLocationInput.addEventListener("input", checkpainLocation);
  hairColorInput.addEventListener("input", checkhairColor);
  heardOfUsInput.addEventListener("input", checkheardOfUs);
});
drinksPerWeekInput.addEventListener("input", checkdrinksPerWeek);
userIdInput.addEventListener("input", checkuserId);
passwordInput.addEventListener("input", checkpassword);
password2Input.addEventListener("input", checkpasswordmatch);
