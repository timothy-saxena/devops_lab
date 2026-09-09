function checkForm() {

    let fn = document.getElementById("fn").value.trim();
    let ln = document.getElementById("ln").value.trim();
    let mob = document.getElementById("mob").value.trim();
    let mail = document.getElementById("mail").value.trim();
    let pass = document.getElementById("pass").value;
    let age = document.getElementById("age").value;

    if (!/^[A-Za-z]{8,10}$/.test(fn)) {
        alert("First Name should contain only 8-10 alphabets");
        return false;
    }

    if (!/^[A-Za-z]{8,10}$/.test(ln)) {
        alert("Last Name should contain only 8-10 alphabets");
        return false;
    }

    if (!/^\d{10}$/.test(mob)) {
        alert("Enter a valid 10 digit Mobile Number");
        return false;
    }

    if (!/^\d+@[A-Za-z]+\.com$/.test(mail)) {
        alert("Email should be like 12345@gmail.com");
        return false;
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!]).{8,10}$/.test(pass)) {
        alert("Password should be 8-10 characters with letters, numbers and symbols");
        return false;
    }

    if (age <= 21) {
        alert("Age should be above 21");
        return false;
    }

    return true;
}