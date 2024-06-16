window.onload = function() {
    console.log(sessionStorage.getItem("login"));

    var login = sessionStorage.getItem("login");
    var loginHtml = document.getElementById("loginHtml");
    
    if (login == "1") {
        loginHtml.innerHTML = '<a href="member.html" class="login-button" target="_top">會員中心</a>';
    }
    else {
        loginHtml.innerHTML = '<a href="login.html" class="login-button" target="_top">登入會員</a>';
    }
}
