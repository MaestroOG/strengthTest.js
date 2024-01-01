const pass = document.getElementById("text");

function strengthTest() {
    let password = pass.value;
    if (password.length < 8) {
        pass.style.borderColor = "red";
        remarks.innerHTML = "Password is weak";
    } else if (password.length === 8) {
        pass.style.borderColor = "yellow";
        remarks.innerHTML = "Password is medium";
    } else {
        pass.style.borderColor = "green";
        remarks.innerHTML = "Password is strong";
    }
}
