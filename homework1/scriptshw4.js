/* Jayden Pickin
Nov-10-2025
Javascript File*/

const currentDate = new Date();
const todayMonth = currentDate.getMonth() + 1; // +1 because getMonth() returns 0-11
const todayDate = currentDate.getDate();
const todayYear = currentDate.getFullYear();
const formattedDate = todayMonth + '-' + todayDate + '-' + todayYear;
const submit = document.getElementById("submitButton");

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
const validButtonInput = document.getElementById("validButton");

const letterApostDashChars = /^[A-Za-z'’-]+(?: [A-Za-z'’-]+)*$/;
const letterApostDashNumChars = /^[A-Za-z'’\-0-9]+(?: [A-Za-z'’\-0-9]+)*$/;
const NumDashOnly = /^[0-9-]+(?: [0-9-]+)*$/;
const lettersOnly = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userIdFormat = /^[A-Za-z1234567890_-]+[A-Za-z1234567890_-]+$/;
const passwordFormat = /^(?=.*[0-9])(?=.*[!@#%^&*()-_+=\/><.,`~])(?=.*[A-Za-z]).+$/;
  


function lengthAllowed(Input,maxLength,minLength){
  if(Input.length>maxLength){
    return false;
  }
  else if(Input.length<minLength){
    return false;
  }
  else{
    return true;
  }
}

function checkfname(){
  const fnameValue = fnameInput.value.trim();
  if(fnameValue.length>0){
    if(!lengthAllowed(fnameValue,30,1)){
      document.getElementById("fnameError").innerHTML="NOT ALLOWED--Too Long";
      //userCanSubmit()
      return false;
    }
    else if(letterApostDashChars.test(fnameValue)){
      document.getElementById("fnameError").innerHTML="";
      //userCanSubmit()
      return true;
    }
    else{
      document.getElementById("fnameError").innerHTML="NOT ALLOWED--Letters, Apostrophes, and Dashes only";
      //userCanSubmit()
      return false;
    }
  }
}

function checkmInitial(){
  const mInitialValue = mInitialInput.value.trim();
  if(mInitialValue.length>0){

    if(lettersOnly.test(mInitialValue)){
      document.getElementById("mInitialError").innerHTML="";
      //userCanSubmit()
      return true;
    }
    else{
      document.getElementById("mInitialError").innerHTML="NOT ALLOWED--Letters only";
      //userCanSubmit()
      return false;
    }
  }
  else{
    return true
  }
}
  
function checklname(){
  const lnameValue = lnameInput.value.trim();
  if(lnameValue.length>0){
    if(!lengthAllowed(lnameValue,30,1)){
      document.getElementById("lnameError").innerHTML="NOT ALLOWED--Too Long";
      //userCanSubmit()
      return false;
    }
    else if(letterApostDashNumChars.test(lnameValue)){
      document.getElementById("lnameError").innerHTML="";
      //userCanSubmit()
      return true;
    }
    else{
      document.getElementById("lnameError").innerHTML="NOT ALLOWED--Letters, Apostrophes, 2-5, and Dashes only";
      //userCanSubmit()
      return false;
    }
  }
}
  
function checkdateOfBirth(){
  const dob = new Date(dateOfBirthInput.value);
  const today = new Date();
  const oldDate = new Date();
  oldDate.setFullYear(oldDate.getFullYear()-120)
  
  if(dob < today){
    document.getElementById("dOBError").innerHTML="";
    //userCanSubmit()
    return true;
  }
  else if(dob > oldDate){
    //document.getElementById("dOBError").innerHTML=oldDate;
    document.getElementById("dOBError").innerHTML="NOT ALLOWED--Must be younger than 120";
    //userCanSubmit()
    return false;
  }
  else{
    document.getElementById("dOBError").innerHTML="NOT ALLOWED--Must be born already";
    //userCanSubmit()
    return false;
  }
}

function checksocialSecurity(){
  const socialSecurityValue = socialSecurityInput.value.trim();
  
  if(NumDashOnly.test(socialSecurityValue)){
    document.getElementById("socialSecurityError").innerHTML="";
    //userCanSubmit()
    return true;
  }
  else{
    document.getElementById("socialSecurityError").innerHTML="NOT ALLOWED--Numbers and Dashes only";
    //userCanSubmit()
    return false;
  }
}

function checkaddressLine1(){
  //no check needed
  if(addressLine1Input.value.length>0){
    if(!lengthAllowed(addressLine1Input.value,30,2)){
      document.getElementById("addressLine1Error").innerHTML="NOT ALLOWED--Limited to 2-30 characters";
      //userCanSubmit()
      return false;
    }
    else{
      document.getElementById("addressLine1Error").innerHTML="";
      //userCanSubmit()
      return true;
    }
  }
}

function checkaddressLine2(){
  //no check needed
  if(addressLine2Input.value.length>0){
    if(!lengthAllowed(addressLine2Input.value,30,2)){
      document.getElementById("addressLine2Error").innerHTML="NOT ALLOWED--Limited to 2-30 characters";
      //userCanSubmit()
      return false;
    }
    else{
      document.getElementById("addressLine2Error").innerHTML="";
      //userCanSubmit()
      return true;
    }
  }
  else{
    return true
  }
}
  
function checkcity(){
  if(cityInput.value.length>0){
    if(!lengthAllowed(cityInput.value,30,2)){
      document.getElementById("cityError").innerHTML="NOT ALLOWED--Limited to 2-30 characters";
      //userCanSubmit()
      return false;
    }
    else{
      document.getElementById("cityError").innerHTML="";
      //userCanSubmit()
      return true;
    }
  }
}
  
function checkstate(){
  if(stateInput.value=="ERRORBADNOEVILDONTDOTHISONE"){
    document.getElementById("stateError").innerHTML="NOT ALLOWED--Please Select a Valid Option";
    //userCanSubmit()
    return false;
  }
  else{
    document.getElementById("stateError").innerHTML="";
    //userCanSubmit()
    return true;
  }
}
  
function checkzipcode(){
  const zipcodeValue = zipcodeInput.value.trim();
  if(zipcodeValue.length>0){
    if(NumDashOnly.test(zipcodeValue)){
      if(!lengthAllowed(zipcodeValue,30,2)){
        document.getElementById("zipcodeError").innerHTML="NOT ALLOWED--Limited to 5-10 numbers";
        //userCanSubmit()
        return false;
      }
      else{
        document.getElementById("zipcodeError").innerHTML="";
        //userCanSubmit()
        return true;
      }
    }
    else{
      document.getElementById("zipcodeError").innerHTML="NOT ALLOWED--Numbers and Dashes only";
      //userCanSubmit()
      return false;
    }
  }
}
  
function checkemail(){
  if(emailInput.value.length>0){
    if(emailFormat.test(emailInput.value)){
      document.getElementById("emailError").innerHTML="";
      //userCanSubmit()
      return true;
    }
    else{
      document.getElementById("emailError").innerHTML="NOT ALLOWED--Invalid Format";
      //userCanSubmit()
    return false;
    }
  }
}
  
function checkcurrentSymptoms(){
  if(currentSymptomsInput.value.includes('"')){
    document.getElementById("currentSymptomsError").innerHTML='NOT ALLOWED--" Is not allowed';
    //userCanSubmit()
    return false;
  }
  else{
    document.getElementById("currentSymptomsError").innerHTML="";
    //userCanSubmit()
    return true;
  }
}
  
function checkpainLocation(){
  return true;
  //not needed right now
}
  
function checkhairColor(){
  return true;
  //not needed right now
}
  
function checkheardOfUs(){
  return true;
  //not needed right now
}
  
function checkdrinksPerWeek(){
  return true;
  //not needed right now
}
  
function checkuserId(){
  if(userIdInput.value.length>0){
    if(userIdFormat.test(userIdInput.value)){
      if(lengthAllowed(userIdInput.value,30,5)){
        document.getElementById("userIdError").innerHTML="";
        //userCanSubmit()
        return true;
      }
      else{
        document.getElementById("userIdError").innerHTML="NOT ALLOWED--Invalid Length 5-30 characters";
        //userCanSubmit()
        return false;
      }
    }
    else{
      document.getElementById("userIdError").innerHTML="NOT ALLOWED--Must be letter, number or dashes";
      //userCanSubmit()
      return false;
    }
  }
}
  
function checkpassword(){
  if(passwordInput.value.length>0){
    if(passwordFormat.test(passwordInput.value)){
      if(lengthAllowed(passwordInput.value,30,8)){
        document.getElementById("password1Error").innerHTML="";
        //userCanSubmit()
        return true;
      }
      else{
        document.getElementById("password1Error").innerHTML="NOT ALLOWED--Invalid Length 8-30 characters";
        //userCanSubmit()
        return false;
      }
    }
    else{
      document.getElementById("password1Error").innerHTML="NOT ALLOWED--Must be letter, number, special charater or dashes";
      //userCanSubmit()
      return false;
    }
  }
}

function checkpasswordmatch(){
  if(passwordInput.value!=password2Input.value){
    document.getElementById("password2Error").innerHTML="Passwords Don't match";
    //userCanSubmit()
    return false;
  }
  else{
    document.getElementById("password2Error").innerHTML="";
    //userCanSubmit()
    return true;
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  
  
  submit.disabled = true;
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
  drinksPerWeekInput.addEventListener("input", checkdrinksPerWeek);
  userIdInput.addEventListener("input", checkuserId);
  passwordInput.addEventListener("input", checkpassword);
  password2Input.addEventListener("input", checkpasswordmatch);
  

  const showAllButton = document.getElementById("showButton");
  const displayHERE = document.getElementById("displayHERE");
  
  showAllButton.addEventListener("click",()=>{
    displayHERE.innerHTML = `
    fname: ${fnameInput.value}<br>
    mInitial: ${mInitialInput.value}<br>
    lname: ${lnameInput.value}<br>
    dateOfBirth: ${dateOfBirthInput.value}<br>
    socialSecurity: ${socialSecurityInput.value}<br>
    addressLine1: ${addressLine1Input.value}<br>
    addressLine2: ${addressLine2Input.value}<br>
    city: ${cityInput.value}<br>
    state: ${stateInput.value}<br>
    zipcode: ${zipcodeInput.value}<br>
    email: ${emailInput.value}<br>
    currentSymptoms: ${currentSymptomsInput.value}<br>
    painLocation: ${painLocationInput.value}<br>
    hairColor: ${hairColorInput.value}<br>
    heardOfUs: ${heardOfUsInput.value}<br>
    drinksPerWeek: ${drinksPerWeekInput.value}<br>
    userId: ${userIdInput.value}<br>
    password: ${passwordInput.value}<br>
    password2: ${password2Input.value}<br>
    `;
  });

  validButtonInput.addEventListener("click",()=>{
    userCanSubmit();
  });
});

function userCanSubmit(){
  const fnameAllowed = checkfname();
  const mInitialAllowed = checkmInitial();
  const lnameAllowed = checklname();
  const dateOfBirthAllowed = checkdateOfBirth();
  const socialSecurityAllowed = checksocialSecurity();
  const addressLine1Allowed = checkaddressLine1();
  const addressLine2Allowed = checkaddressLine2();
  const cityAllowed = checkcity();
  const stateAllowed = checkstate();
  const zipcodeAllowed = checkzipcode();
  const emailAllowed = checkemail();
  const currentSymptomsAllowed = checkcurrentSymptoms();
  const painLocationAllowed = checkpainLocation();
  const hairColorAllowed = checkhairColor();
  const heardOfUsAllowed = checkheardOfUs();
  const drinksPerWeekAllowed = checkdrinksPerWeek();
  const userIdAllowed = checkuserId();
  const passwordAllowed = checkpassword();
  const password2Allowed = checkpasswordmatch();
  const passwordUserId = !passwordInput.value.includes(userIdInput.value)
  var errorMessage = []

  const submitAllowed = fnameAllowed && mInitialAllowed && lnameAllowed && dateOfBirthAllowed && socialSecurityAllowed && addressLine1Allowed && addressLine2Allowed && cityAllowed && stateAllowed && zipcodeAllowed && emailAllowed && currentSymptomsAllowed && painLocationAllowed && hairColorAllowed && heardOfUsAllowed && drinksPerWeekAllowed && userIdAllowed && passwordAllowed && password2Allowed && passwordUserId;
  submit.disabled = !submitAllowed;
  if (!fnameAllowed){errorMessage.push("fnameAllowed Failed");}
  if (!mInitialAllowed){errorMessage.push("mInitialAllowed Failed");}
  if (!currentSymptomsAllowed){errorMessage.push("currentSymptomsAllowed Failed");}
  if (!painLocationAllowed){errorMessage.push("painLocationAllowed Failed");}
  if (!hairColorAllowed){errorMessage.push("hairColorAllowed Failed");}
  if (!heardOfUsAllowed){errorMessage.push("heardOfUsAllowed Failed");}
  if (!drinksPerWeekAllowed){errorMessage.push("drinksPerWeekAllowed Failed");}
  if (!userIdAllowed){errorMessage.push("userIdAllowed Failed");}
  if (!passwordAllowed){errorMessage.push("passwordAllowed Failed");}
  if (!password2Allowed){errorMessage.push("password2Allowed Failed");}
  if (!passwordUserId){errorMessage.push("passwordUserId Failed");}
  if (!lnameAllowed){errorMessage.push("lnameAllowed Failed");}
  if (!dateOfBirthAllowed){errorMessage.push("dateOfBirthAllowed Failed");}
  if (!socialSecurityAllowed){errorMessage.push("socialSecurityAllowed Failed");}
  if (!addressLine1Allowed){errorMessage.push("addressLine1Allowed Failed");}
  if (!addressLine2Allowed){errorMessage.push("addressLine2Allowed Failed");}
  if (!cityAllowed){errorMessage.push("cityAllowed Failed");}
  if (!stateAllowed){errorMessage.push("stateAllowed Failed");}
  if (!zipcodeAllowed){errorMessage.push("zipcodeAllowed Failed");}
  if (!emailAllowed){errorMessage.push("emailAllowed Failed");}
  
  
  if(submitAllowed){
      document.getElementById("validTxt").innerHTML="";
    }
    else{
      document.getElementById("validTxt").innerHTML=errorMessage.join('<br>');
    }
};

/*
New functions here
*/

document.addEventListener("DOMContentLoaded", () => {
  const stateAbbrev = document.getElementById("state");
  fetch("stateAbbrev.json")
    .then(response => response.json())
    
    .then(states => {
      states.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent  = state;
        stateAbbrev.appendChild(option);
      });
    })
});


/*Just using the cookie functions from w3schools. No need to reinvent the wheel here*/
function setCookie(fNamevalue) {
  const d = new Date();
  d.setTime(d.getTime() + (2*86400000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = "fName=" + fNamevalue + ";" + expires + ";path=/";
}


//retrieves cookie
function getCookie(name) {
  name = name + "=";
  const decoded = decodeURIComponent(document.cookie).split(";");

  for (let c of decoded) {
    c = c.trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length);
    }
  }
  return "";
}


//deletes cookie
function deleteCookie(fName) {
  document.cookie = "fName=" + fName + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}

//calls delete cookie
//actually redudent
function newUser(fname) {
  deleteCookie(fname)
 }

//creates constants
const fNameCookie = getCookie("fName");
const welcomeMessage = document.getElementById("HelloWorld");
const newUserButton = document.getElementById("newUserButton");
const remeberMe = document.getElementById("remeberMe");
const nonSecureFields = document.querySelectorAll("[non-secure]");

const returning = getCookie("fName");
const stored = localStorage.getItem("savedfName");

//on load run this
document.addEventListener("DOMContentLoaded", () => {
  
  //if there is a cookie run this
  if(fNameCookie) {
    //says Welcome Back *NAME*
    welcomeMessage.innerHTML = "Welcome Back " + fNameCookie.value;
    //if user clicks new user, delete cookies
    newUserButton.addEventListener("click",()=>{
      newUser(fNameCookie);
    });
    
  } else {
    //No cookie therefore new user
    welcomeMessage.innerHTML = "Welcome New User";
  }
});

//if you submit create cookie
submit.addEventListener("click",()=>{
    if(remeberMe) {
      setCookie(fNameInput.value);
    }
});

//creates local storage save info 
nonSecureFields.forEach(field => {
  field.addEventListener("blur",()=>{
    localStorage.setItem(field.id, field.value);
  });
});

//when the window is loaded display popup message
window.addEventListener("load",()=> {
  if(returning) {
    const popupMessage = confirm("Are you " + returning.value + "?");
    if(popupMessage) {
      restoreData();
    } else {
      localStorage.clear();
    }
  }
});


//refills data if happening
function restoreData() {
  nonSecurefields.forEach(field => {
    const savedValue = localStorage.getItem(field.id);
    if(savedValue !== null) {
      field.value=savedValue
    }
  });
}

//creates cookie on fname blur
fnameInput.addEventListener("blur",()=>{
  setCookie(fnameInput.value);
});
