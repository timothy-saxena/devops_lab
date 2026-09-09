function chk(){
var fn=document.getElementById("fn").value;
var ln=document.getElementById("ln").value;
var mob=document.getElementById("mob").value;
var em=document.getElementById("em").value;
var pw=document.getElementById("pw").value;
var age=document.getElementById("age").value;

if(fn.length<8||fn.length>10){alert("First Name must be 8 to 10 characters.");return false;}
for(var i=0;i<fn.length;i++) if(!((fn[i]>='A'&&fn[i]<='Z')||(fn[i]>='a'&&fn[i]<='z'))){alert("First Name should contain only alphabets.");return false;}

if(ln.length<8||ln.length>10){alert("Last Name must be 8 to 10 characters.");return false;}
for(var i=0;i<ln.length;i++) if(!((ln[i]>='A'&&ln[i]<='Z')||(ln[i]>='a'&&ln[i]<='z'))){alert("Last Name should contain only alphabets.");return false;}

if(mob.length!=10){alert("Mobile Number must be 10 digits.");return false;}
for(var i=0;i<mob.length;i++) if(mob[i]<'0'||mob[i]>'9'){alert("Mobile Number should contain only digits.");return false;}

var e=/^[A-Za-z0-9]+_[0-9]+@[A-Za-z]+\.com$/;
if(!e.test(em)){alert("Invalid Email.");return false;}

if(pw.length<8||pw.length>10){alert("Password must be 8 to 10 characters.");return false;}
var l=false,d=false,s=false;
for(var i=0;i<pw.length;i++){var c=pw[i];
if((c>='A'&&c<='Z')||(c>='a'&&c<='z'))l=true;
else if(c>='0'&&c<='9')d=true;
else s=true;}
if(!(l&&d&&s)){alert("Password should contain letters, numbers and symbols.");return false;}

if(age<=21){alert("Bride and Groom must be above 21.");return false;}
window.location="thank.html";
return false;
}