function rara()
{
var nombreUsuario = document.getElementById("email").value;
var contrasena = document.getElementById("password").value;

if (nombreUsuario == "Student" && contrasena == "Admin1234") 
{
    window.open("../guanill.github.io/portal.html")
}
else
{
    alert("La contrasena es incorrecta.")
}
}
