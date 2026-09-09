function validate(){
let f=fname.value,l=lname.value,m=mobile.value,e=email.value,p=pass.value,a=age.value;
if(!/^[A-Za-z]{8,10}$/.test(f)){alert("First Name 8-10 alphabets");return false;}
if(!/^[A-Za-z]{8,10}$/.test(l)){alert("Last Name 8-10 alphabets");return false;}
if(!/^\d{10}$/.test(m)){alert("10 digit Mobile");return false;}
if(!/^[0-9]+@[A-Za-z]+\.com$/.test(e)){alert("Invalid Email");return false;}
if(!/^[A-Za-z0-9@#$%^&*!]{8,10}$/.test(p)){alert("Invalid Password");return false;}
if(a<=21){alert("Age must be above 21");return false;}
return true;
}