function login() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;

    var account1 = sessionStorage.getItem("account");
    var password1 = sessionStorage.getItem("password");

    if (account == "admin" && password == "1234") {
        window.alert("登入成功！ \n自動跳轉到首頁");
        window.location.href = "../index.html";
        sessionStorage.setItem("login", "1");
        console.log(sessionStorage.getItem("login"));
    }
    else if(account == account1 && password == password1) {
        window.alert("登入成功！ \n自動跳轉到首頁");
        sessionStorage.setItem("login", "1");
        window.location.href = "../index.html";
    }
    else {
        window.alert("帳號或密碼錯誤");
        document.getElementById("account").value = "";
        document.getElementById("password").value = "";
    }
}

function cleardata() {
    document.getElementById("account").value = "";
    document.getElementById("password").value = "";
}