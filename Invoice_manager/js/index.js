var logBtn = document.getElementById("login");
var regBtn = document.getElementById("register");
var btn = document.getElementById("btn");

function register() {
    logBtn.style.left = "-400px";
    regBtn.style.left = "50px";
    btn.style.left = "110px";
}

function login() {
    logBtn.style.left = "50px";
    regBtn.style.left = "450px";
    btn.style.left = "0";
}