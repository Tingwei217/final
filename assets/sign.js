function signup() {
    var account = document.getElementById("account").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var name = document.getElementById("name").value;
    var sex1 = document.getElementById("sex1").checked;
    var sex2 = document.getElementById("sex2").checked;
    var birthday = document.getElementById("birthday").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    if (account === "" || password === "" || password2 === "" || name === "" || (!sex1 && !sex2) || birthday === "" || phone === "" || address === "") {
        window.alert("請完整填寫註冊資料");
    }

    else if (password !== password2) {
        window.alert("密碼不一致，請重新輸入");
        document.getElementById("password").value = "";
        document.getElementById("password2").value = "";
    }
    else {
        window.alert("註冊成功！ \n自動跳轉到登入頁面");
        sessionStorage.setItem("account", account);
        sessionStorage.setItem("password", password);
        window.location.href = "login.html";
    }
}

function cleardata() {
    document.getElementById("account").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("name").value = "";
    document.getElementById("sex1").checked = false;
    document.getElementById("sex2").checked = false;
    document.getElementById("birthday").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
}