function login() {
    window.alert("登出成功！ \n自動跳轉到首頁");
    window.location.href = "../index.html";
    sessionStorage.setItem("login", "0");
}