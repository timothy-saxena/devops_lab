function checkForm() {
    let fn = document.getElementById("fn").value;
    let ln = document.getElementById("ln").value;
    let mob = document.getElementById("mob").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let age = document.getElementById("age").value;

    let n = /^[A-Za-z]{8,10}$/;
    let m = /^[0-9]{10}$/;
    let e = /^[0-9]+@[A-Za-z]+\.com$/;
    let p = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@#$%^&*!]).{8,10}$/;

    if (!n.test(fn)) {
        alert("First Name should contain only alphabets (8-10 letters)");
        return false;
    }

    if (!n.test(ln)) {
        alert("Last Name should contain only alphabets (8-10 letters)");
        return false;
    }

    if (!m.test(mob)) {
        alert("Enter 10 digit Mobile Number");
        return false;
    }

    if (!e.test(mail)) {
        alert("Enter valid Email (12345@abc.com)");
        return false;
    }

    if (!p.test(pass)) {
        alert("Password should be 8-10 characters with letters, numbers and symbols");
        return false;
    }

    if (age < 21) {
        alert("Bride/Groom must be above 21 years");
        return false;
    }

    return true;
}
