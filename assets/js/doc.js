let a = document.getElementById("password");
function show() {
    if (a.type === "password") {
        a.type = "text";
        document.querySelector(".hide").style.display = "none";
        document.querySelector(".visible").style.display = "unset";
    } else {
        a.type = "password";
        document.querySelector(".hide").style.display = "unset";
        document.querySelector(".visible").style.display = "none";
    }
}

