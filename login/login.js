function judge() {
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    // 判断为空
    if (name == null || name == "") {
        document.getElementById("username").setAttribute("placeholder", "Не может быть пустым")
    }
    else if (pass == null || pass == "") {
        document.getElementById("password").setAttribute("placeholder", "Не может быть пустым");
    }
    else if (name == "admin" || pass == "123456") {
        // window.location.href = "../index1/index.html"
        document.getElementById("username").setAttribute("placeholder", "Вход в систему");
        document.getElementById("password").setAttribute("placeholder", ". . . . . . ");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        window.setTimeout("window.location='../index1/index.html'", 800);
    }
    else {
        document.getElementById("username").setAttribute("placeholder", "Пожалуйста, введите еще раз");
        document.getElementById("password").setAttribute("placeholder", "Пожалуйста, введите еще раз");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}

