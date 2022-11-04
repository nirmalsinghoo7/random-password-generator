const generatePassBtn = document.getElementById("generatePassBtn");
let passInput = document.getElementById("passInput");
let passInputNew = document.querySelector("#passInputNew");
const funnyWords = [ "what is the password", "admin", 123456789, "wifi", "merapassword", "password", "ineedapassword", "changeme", "secret", "iamforgetful", "newpassword", "IamACompleteIdiot", "nothing", "nothingagain", "iforgot", "user", "YouWontGuessThisOne", "PasswordShmashword", "doubleclick", "password123", "memorysucks", "earlyalzheimers", "LOL111", ];
const allChars =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+=-?/>.<,|{[]}";
passInput.value = "";
passInputNew.value = "";

const weekPass = document.getElementById("weekPass");
const strongPass = document.getElementById("strongPass");
const superStrongPass = document.getElementById("superStrongPass");
const funnyPass = document.getElementById("funnyPass");
const error = document.getElementById("error");


// Toggle between two modes
radioChecked();
function radioChecked() {
  let autoBuild = document.getElementById("autoBuild");
  let customBuild = document.getElementById("customBuild");
  let systemAutoPass = document.getElementsByClassName("systemAutoPass");
  let customBuildPass = document.getElementsByClassName("customBuildPass");
  /* if (customBuildPass.checked == true) {
    autoBuild.checked = true;
  } */
  if (autoBuild.checked == true) {
    systemAutoPass[0].style.display = "block";
    customBuildPass[0].style.display = "none";
    passInput.value = "";
  }
  if (customBuild.checked == true) {
    customBuildPass[0].style.display = "block";
    systemAutoPass[0].style.display = "none";
    passInputNew.value = "";
  }
}

// Check the Strong radio if not checked
if (strongPass.checked == false) {
  strongPass.checked = true;
}

// System Auto Generator Password
function generatePassAutoFunc(){
  if (weekPass.checked == true) {
    error.style.display = "none";
    var passLength = 6;
    var password = "";
    for (var i = 0; i < passLength; i++) {
      var randomPassword = Math.floor(Math.random() * allChars.length);
      password += allChars.substring(randomPassword, randomPassword + 1);
    }
    passInput.value = password;
  } else if (strongPass.checked == true) {
    error.style.display = "none";
    var passLength = 15;
    var password = "";
    for (var i = 0; i < passLength; i++) {
      var randomPassword = Math.floor(Math.random() * allChars.length);
      password += allChars.substring(randomPassword, randomPassword + 1);
    }
    passInput.value = password;
  } else if (superStrongPass.checked == true) {
    error.style.display = "none";
    var passLength = 25;
    var password = "";
    for (var i = 0; i < passLength; i++) {
      var randomPassword = Math.floor(Math.random() * allChars.length);
      password += allChars.substring(randomPassword, randomPassword + 1);
    }
    passInput.value = password;
  } else if (funnyPass.checked == true) {
    error.style.display = "none";
    let funnyPassword =
      funnyWords[Math.floor(Math.random() * funnyWords.length)];
    passInput.value = funnyPassword;
  }else  {
    error.style.display = "block";
  }
}
generatePassBtn.addEventListener("click", generatePassAutoFunc);
// Copy Password 1
function copy() {
  if (passInput.value == "") {
    error.style.display = "block";
  } else {
    passInput.select();
    document.execCommand("copy");
    var customTooltip = document.getElementById("custom-tooltip");
    customTooltip.classList.add("show");
    passInput.style.borderColor = "#34dda9";

    setTimeout(() => {
      customTooltip.classList.remove("show");
      passInput.style.borderColor = "#ced4da";
    }, 3000);
  }
}


  // Choose Settings Custom Password

const passLengthn = document.querySelector("#passLength");
const generatePassBtn2 = document.querySelector("#generatePassBtn2");
const checkboxes = [...document.querySelectorAll("input[type='checkbox']")];
const errors = document.querySelector("#error-new");
const characters = {
  lowerLetters : "abcdefghijklmnopqrstuvwxyz",
  upperLetters : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbersLetters : "0123456789",
  symbolsLetters : '~!@#$%^&*()_+=-?/>.<,|{[]}'
};
function generatePassword(){
  let passwordCus = "",
    passwordLength = passLengthn.value,
    selection = "";
    passInputNew.value = "";

  checkboxes.forEach(checkbox =>{
    if(checkbox.checked){
      selection +=characters[checkbox.name];
    }
  });

  if(passLengthn.value == ""){
    passInputNew.value = "";
    errors.style.display = "block";
    errors.innerHTML = "Please enter password length";
  }
  else if (!selection){
    passInputNew.value = "";
    errors.style.display = "block";
    errors.innerHTML = "Please select character type."
  }else{
    errors.style.display = "none";
    for (let i = 0; i < passwordLength; i++){
      passwordCus += selection[Math.floor(Math.random() * selection.length)]
    }
    passInputNew.value = passwordCus;
  }
}

generatePassBtn2.addEventListener("click", generatePassword);

// Copy Password 2
function copy2() {
  if (passInputNew.value == "") {
    error.style.display = "block";
  } else {
    passInputNew.select();
    document.execCommand("copy");
    var customTooltip = document.getElementById("custom-tooltip2");
    customTooltip.classList.add("show");
    passInputNew.style.borderColor = "#34dda9";

    setTimeout(() => {
      customTooltip.classList.remove("show");
      passInputNew.style.borderColor = "#ced4da";
    }, 3000);
  }
}