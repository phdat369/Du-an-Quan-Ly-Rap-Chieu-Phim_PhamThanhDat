let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let labelEmail = document.getElementsByTagName("label")[0];
let labelPassword = document.getElementsByTagName("label")[1];
let btnLogin = document.getElementById("btn_login_confirm");
let loginEmail = document.getElementById("login_email");
let loginPassword = document.getElementById("login_password");
let notificationEmailError = document.getElementById("notificationEmailError");
let notificationPasswordError = document.getElementById("notificationPasswordError");
const checkValidateLogin = () => {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let checkEmail = regexEmail.test(inputEmail.value);
    if(checkEmail == false) {
        notificationEmailError.innerText = "Email không hợp lệ";
        inputEmail.focus();
        inputEmail.style.borderColor = "red";
        labelEmail.style.color = "red";
        return ;
    }
    else {
        notificationEmailError.innerText = "";
        inputEmail.style.borderColor = "#553A3B";
        labelEmail.style.color = "#E2E8F0";
    }
    if (inputPassword.value == "") {
        notificationPasswordError.innerText = "Mật khẩu không hợp lệ";
        inputPassword.focus();
        inputPassword.style.borderColor = "red";
        labelPassword.style.color = "red";
        return ; 
    }
    else {
        notificationPasswordError.innerText = "";
        inputPassword.style.borderColor = "#553A3B";
        labelPassword.style.color = "#E2E8F0";
    }
    inputEmail.value = "";
    inputPassword.value = "";
}
btnLogin.addEventListener("click" , checkValidateLogin);