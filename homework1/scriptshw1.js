/* Place your JavaScript in this file */

const currentDate = new Date(year,month,date)

const fnameinput = document.getElementById("const fname");
const mInitialinput = document.getElementById("const mInitial");
const lnameinput = document.getElementById("const lname");
const dateOfBirthinput = document.getElementById("const dateOfBirth");
const socialSecurityinput = document.getElementById("const socialSecurity");
const addressLine1input = document.getElementById("const addressLine1");
const addressLine2input = document.getElementById("const addressLine2");
const cityinput = document.getElementById("const city");
const stateinput = document.getElementById("const state");
const zipcodeinput = document.getElementById("const zipcode");
const emailinput = document.getElementById("const email");
const currentSymptomsinput = document.getElementById("const currentSymptoms");
const painLocationinput = document.getElementById("const painLocation");
const hairColorinput = document.getElementById("const hairColor");
const heardOfUsinput = document.getElementById("const heardOfUs");
const drinksPerWeekinput = document.getElementById("const drinksPerWeek");
const userIdinput = document.getElementById("const userId");
const passwordinput = document.getElementById("const password");
const letterApostDashChars = /^[A-Za-z'’-]+(?: [A-Za-z'’-]+)*$/;
const NumDashOnly = /^[123457890-]+(?: [123457890-]+)*$/;
const lettersOnly = /^[A-Za-z]+(?: [A-Za-z]+)*$/;


function checkfname(){
  const fnameValue = fnameInput.value.trim();
  
  if(letterApostDashChars.test(fnameValue)){
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
  
  if(letterApostDashNumChars.test(lnameValue)){
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
  if(addressLine1input.length>0){
    document.getElementById("addressLine1Error").innerHTML="Allowed";
  }
}
function checkaddressLine2() {
  
function checkcity() {
  
function checkstate() {
  
function checkzipcode() {
  
function checkemail() {
  
function checkcurrentSymptoms() {
  
function checkpainLocation() {
  
function checkhairColor() {
  
function checkheardOfUs() {
  
function checkdrinksPerWeek() {
  
function checkuserId() {
  
function checkpassword() {
  
