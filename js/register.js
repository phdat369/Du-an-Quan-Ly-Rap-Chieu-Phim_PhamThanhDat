let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let inputRePassword = document.getElementById("re_password");
let labelName = document.getElementsByTagName("label")[0];
let labelEmail = document.getElementsByTagName("label")[1];
let labelPassword= document.getElementsByTagName("label")[2];
let labelRePassword = document.getElementsByTagName("label")[3];
let btnRegister = document.getElementById("btn_register");
let notificationNameError = document.getElementById("notificationNameError");
let notificationEmailError = document.getElementById("notificationEmailError");
let notificationPasswordError = document.getElementById("notificationPasswordError");
let notificationRePasswordError = document.getElementById("notificationRePasswordError");
let checkbox = document.getElementById("check");
let btnToLogin = document.getElementById("btn_login");
btnToLogin.addEventListener("click" , () => {
    window.location.href = "../pages/login.html";
});
const checkValidateRegister = () => {
    if (inputName.value == "") {
        notificationNameError.innerText = "Họ và tên không hợp lệ";
        inputName.focus();
        inputName.style.borderColor = "red";
        labelName.style.color = "red";
        return ; 
    }
    else {
        notificationNameError.innerText = "";
        inputName.style.borderColor = "#334155";
        labelName.style.color = "#94A3B8";
    }
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let checkEmail = regexEmail.test(inputEmail.value);
    if(inputEmail.value == "" || checkEmail == false) {
        notificationEmailError.innerText = "Email không hợp lệ";
        inputEmail.focus();
        inputEmail.style.borderColor = "red";
        labelEmail.style.color = "red";
        return ; 
    }
    else {
        notificationEmailError.innerText = "";
        inputEmail.style.borderColor = "#334155";
        labelEmail.style.color = "#94A3B8";
    }
    let regexPassword = /^(?=.*[!@#$%^&*]).+$/;
    let checkPassword = regexPassword.test(inputPassword.value);
    if (inputPassword.value.length < 8 || checkPassword == false) {
        notificationPasswordError.innerText = "Password không hợp lệ";
        inputPassword.focus();
        inputPassword.style.borderColor = "red";
        labelPassword.style.color = "red";
        return ;
    }
    else {
        notificationPasswordError.innerText = "";
        inputPassword.style.borderColor = "#334155";
        labelPassword.style.color = "#94A3B8";
    }
    if (inputRePassword.value != inputPassword.value) {
        notificationRePasswordError.innerText = "Password không trùng khớp";
        inputRePassword.focus();
        inputRePassword.style.borderColor = "red";
        labelRePassword.style.color = "red";
        return ;
    }
    else {
        notificationRePasswordError.innerText = "";
        inputRePassword.style.borderColor = "#334155";
        labelRePassword.style.color = "#94A3B8";
    }
    if (checkbox.checked == false) {
        notificationCheckBoxError.innerText = "Vui lòng đồng ý các điều khoản của CineEdu";
        return ;
    }
    else {
        notificationCheckBoxError.innerText = "";
    }
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
    inputRePassword.value = "";
    window.location.href = "../pages/login.html";
}
btnRegister.addEventListener("click" , checkValidateRegister);