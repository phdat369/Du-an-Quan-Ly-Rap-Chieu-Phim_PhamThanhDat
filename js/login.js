let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let labelEmail = document.getElementsByTagName("label")[0];
let labelPassword = document.getElementsByTagName("label")[1];
let btnLogin = document.getElementById("btn_login_confirm");
let loginEmail = document.getElementById("login_email");
let loginPassword = document.getElementById("login_password");
let notificationEmailError = document.getElementById("notificationEmailError");
let notificationPasswordError = document.getElementById("notificationPasswordError");
let data = JSON.parse(localStorage.getItem("data")) || [
    {
        id: 1,
        fullName: "Admin Chính",
        email: "LQTuan@rikkei.edu.vn",
        password: "Admin123456",
        role: "admin",
        createdAt: "2026-03-03T12:26:21.617Z",
        isActive: true
    },
    {
        id: 2,
        fullName: "Nguyễn Văn A",
        email: "nguyenvana@example.com",
        password: "Matkhau123",
        role: "admin",
        createdAt: "2026-03-01T12:26:21.617Z",
        isActive: true
    },
    {
        id: 3,
        fullName: "Trần Thị B",
        email: "tranthib@example.com",
        password: "12345678",
        role: "admin",
        createdAt: "2026-03-03T12:26:21.617Z",
        isActive: false
    }
];
const showToastCorrect = (message1 , message2) => {
    let toastBox = document.getElementById("toast");
    let div = document.createElement("div");
    div.className = "toast";
    div.innerHTML = `<img src="../assets/icons/icon_correct.png" alt="">
                     <div>
                     <p class="message_1">${message1}</p>
                     <p class="message_2">${message2}</p>
                     </div>`;
    toastBox.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 2000);
}
const showToastError = (message1 , message2) => {
    let toastBox = document.getElementById("toast");
    let div = document.createElement("div");
    div.className = "toast";
    div.innerHTML = `<img src="../assets/icons/icon_error.png" alt="">
                     <div>
                     <p class="message_1">${message1}</p>
                     <p class="message_2">${message2}</p>
                     </div>`;
    toastBox.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 2000);
}
const checkValidateLogin = () => {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let checkEmail = regexEmail.test(inputEmail.value);
    if (checkEmail == false) {
        notificationEmailError.innerText = "Email không hợp lệ";
        inputEmail.focus();
        inputEmail.style.borderColor = "red";
        labelEmail.style.color = "red";
        return;
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
        return;
    }
    else {
        notificationPasswordError.innerText = "";
        inputPassword.style.borderColor = "#553A3B";
        labelPassword.style.color = "#E2E8F0";
    }
    let count = 0 ;
    data.forEach((element) => {
        if (inputEmail.value == element.email && inputPassword.value == element.password) {
            showToastCorrect("Đăng nhập thành công", "Chào mừng bạn đến với trang web Rikkei.");
            count ++;
            window.location.href = "../pages/movie_management_page.html";
            inputEmail.value = "";
            inputPassword.value = "";
        }
    });
    if (count == 0) {
        showToastError("Đăng nhập thất bại" , "Tài khoản hoặc mật khẩu sai." );
    }
}
btnLogin.addEventListener("click", checkValidateLogin);