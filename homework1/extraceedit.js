/* Jayden Pickin
Nov-10-2025
Javascript File*/

const modalAccessButton = document.getElementById("submitButtonISH");

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
    welcomeMessage.innerHTML = "Welcome Back " + fNameCookie;
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
    const popupMessage = confirm("Are you " + getCookie("fName") + "?");
    if(popupMessage) {
      restoreData();
    } else {
      localStorage.clear();
    }
  }
});


//refills data if happening
function restoreData() {
  nonSecureFields.forEach(field => {
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

/*
New functions here
*/

const modalBox = document.getElementById("popUpModal");
const closeBtn = document.getElementById("goBack");

const fnameModalOutput = document.getElementById("fnameModal").value;
const mInitialModalOutput = document.getElementById("mInitialModal").value;
const currentSymptomsModalOutput = document.getElementById("currentSymptomsModal").value;
const painLocationModalOutput = document.getElementById("painLocationModal").value;
const hairColorModalOutput = document.getElementById("hairColorModal").value;
const heardOfUsModalOutput = document.getElementById("heardOfUsModal").value;
const drinksPerWeekModalOutput = document.getElementById("drinksPerWeekModal").value;
const userIdModalOutput = document.getElementById("userIdModal").value;
const passwordModalOutput = document.getElementById("passwordModal").value;
const password2ModalOutput = document.getElementById("password2Modal").value;
const lnameModalOutput = document.getElementById("lnameModal").value;
const dateOfBirthModalOutput = document.getElementById("dateOfBirthModal").value;
const socialSecurityModalOutput = document.getElementById("socialSecurityModal").value;
const addressLine1ModalOutput = document.getElementById("addressLine1Modal").value;
const addressLine2ModalOutput = document.getElementById("addressLine2Modal").value;
const cityModalOutput = document.getElementById("cityModal").value;
const stateModalOutput = document.getElementById("stateModal").value;
const zipcodeModalOutput = document.getElementById("zipcodeModal").value;
const emailModalOutput = document.getElementById("emailModal").value;

modalAccessButton.onclick = function() {
  const fnameModalError = document.getElementById("fnameError").innerHTML;
  const mInitialModalError = document.getElementById("mInitialError").innerHTML;
  const currentSymptomsModalError = document.getElementById("currentSymptomsError").innerHTML;
  const painLocationModalError = document.getElementById("painLocationError").innerHTML;
  const hairColorModalError = document.getElementById("hairColorError").innerHTML;
  const heardOfUsModalError = document.getElementById("heardOfUsError").innerHTML;
  const drinksPerWeekModalError = document.getElementById("drinksPerWeekError").innerHTML;
  const userIdModalError = document.getElementById("userIdError").innerHTML;
  const passwordModalError = document.getElementById("password1Error").innerHTML;
  const password2ModalError = document.getElementById("password2Error").innerHTML;
  const lnameModalError = document.getElementById("lnameError").innerHTML;
  const dateOfBirthModalError = document.getElementById("dOBError").innerHTML;
  const socialSecurityModalError = document.getElementById("socialSecurityError").innerHTML;
  const addressLine1ModalError = document.getElementById("addressLine1Error").innerHTML;
  const addressLine2ModalError = document.getElementById("addressLine2Error").innerHTML;
  const cityModalError = document.getElementById("cityError").innerHTML;
  const stateModalError = document.getElementById("stateError").innerHTML;
  const zipcodeModalError = document.getElementById("zipcodeError").innerHTML;
  const emailModalError = document.getElementById("emailError").innerHTML;
  
  modalBox.style.display = "block";
  document.getElementById("fnameModal").innerHTML=fnameInput.value;
  document.getElementById("mInitialModal").innerHTML=mInitialInput.value;
  document.getElementById("currentSymptomsModal").innerHTML=currentSymptomsInput.value;
  document.getElementById("painLocationModal").innerHTML=painLocationInput.value;
  document.getElementById("hairColorModal").innerHTML=hairColorInput.value;
  document.getElementById("heardOfUsModal").innerHTML=heardOfUsInput.value;
  document.getElementById("drinksPerWeekModal").innerHTML=drinksPerWeekInput.value;
  document.getElementById("userIdModal").innerHTML=userIdInput.value;
  document.getElementById("passwordModal").innerHTML=passwordInput.value;
  document.getElementById("password2Modal").innerHTML=password2Input.value;
  document.getElementById("lnameModal").innerHTML=lnameInput.value;
  document.getElementById("dateOfBirthModal").innerHTML=dateOfBirthInput.value;
  document.getElementById("socialSecurityModal").innerHTML=socialSecurityInput.value;
  document.getElementById("addressLine1Modal").innerHTML=addressLine1Input.value;
  document.getElementById("addressLine2Modal").innerHTML=addressLine2Input.value;
  document.getElementById("cityModal").innerHTML=cityInput.value;
  document.getElementById("stateModal").innerHTML=stateInput.value;
  document.getElementById("zipcodeModal").innerHTML=zipcodeInput.value;
  document.getElementById("emailModal").innerHTML=emailInput.value;
  
  document.getElementById("fnameAllowed").innerHTML=fnameModalError;
  document.getElementById("mInitialAllowed").innerHTML=mInitialModalError;
  document.getElementById("currentSymptomsAllowed").innerHTML=currentSymptomsModalError;
  document.getElementById("painLocationAllowed").innerHTML=painLocationModalError;
  document.getElementById("hairColorAllowed").innerHTML=hairColorModalError;
  document.getElementById("heardOfUsAllowed").innerHTML=heardOfUsModalError;
  document.getElementById("drinksPerWeekAllowed").innerHTML=drinksPerWeekModalError;
  document.getElementById("userIdAllowed").innerHTML=userIdModalError;
  document.getElementById("passwordAllowed").innerHTML=passwordModalError;
  document.getElementById("password2Allowed").innerHTML=password2ModalError;
  document.getElementById("lnameAllowed").innerHTML=lnameModalError;
  document.getElementById("dateOfBirthAllowed").innerHTML=dateOfBirthModalError;
  document.getElementById("socialSecurityAllowed").innerHTML=socialSecurityModalError;
  document.getElementById("addressLine1Allowed").innerHTML=addressLine1ModalError;
  document.getElementById("addressLine2Allowed").innerHTML=addressLine2ModalError;
  document.getElementById("cityAllowed").innerHTML=cityModalError;
  document.getElementById("stateAllowed").innerHTML=stateModalError;
  document.getElementById("zipcodeAllowed").innerHTML=zipcodeModalError;
  document.getElementById("emailAllowed").innerHTML=emailModalError;
}

closeBtn.onclick = function() {
  modalBox.style.display = "none";
}

window.onclick = function(event) {
  if(event.target == modalBox) {
    modalBox.style.display = "none";
  }
}

modalAccessButton.addEventListener("click",()=>{
  userCanSubmit();
});

zipcodeInput.addEventListener("input", async function() {
  console.log(zipcodeInput);
  const zipcodeValue = zipcodeInput.value;
  console.log(zipcodeValue);
  if(zipcodeInput.length == 5 && /^[0-9]+$/.test(zipcodeInput)) {
    googelAPiCall(zipcodeInput);
  }
});

async function googelAPiCall(zipcodeHere) {
  const apiKey = AIzaSyA-jkHR46VuACKUIm7nlFLbEd678iUbbWo
  const googelUrlLink = 'https://maps.googelapis.com/maps/api/geocode/json?address=${zipcodeHere}&${apiKey}';

  try {
    const respone = await fetch(googelUrlLink);
    const data = await respone.json();

    if(data.status !=='OK') {
      console.warn("YOU FALIURE ZIP LOOKUP FAILED YOU FAILURE! QUIT CODING!",data.status);
      return;
    }

    const result = data.results[0];

    let city = "";
    let state = "";

    result.address_components.forEach(component => {
      if(component.types.includes("locality")) {
        city = component.long_name;
      }
      if(component.types.includes("administrative_area_level_1")) {
        state = component.short_name;
      } 
    });
    console.log("MADE IT HERE");
    if (city) {
      document.getElementById("city").value = city;
    }
    if (state) {
      document.getElementById("state").value = state;
    }
  }
  catch (error) {
    console.error("API ERROR YOU FOOL: ",error);
  }
}



