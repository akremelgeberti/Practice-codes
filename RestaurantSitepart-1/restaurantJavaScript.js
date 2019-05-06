function  validateItems()
{

 var name = document.getElementById("fullName").value;
 if (name == "" || name == null)
 {
   alert("Fill In Manditory Fields");
   document.getElementById("lblFullName").style.color="red"
   document.getElementById("lblFullName").innerHTML = "Name*"
 }
 else {
   document.getElementById("lblFullName").style.color=""
   document.getElementById("lblFullName").innerHTML = "Name"
 }
var email = document.getElementById("email").value;
if (email == "" || email == null)
{
  alert("Fill In Manditory Fields");
  document.getElementById("lblEmail").style.color="red"
  document.getElementById("lblEmail").innerHTML = "Email*"
    return false;
}
else {
document.getElementById("lblEmail").style.color=""
document.getElementById("lblEmail").innerHTML = "Email"
}
}
