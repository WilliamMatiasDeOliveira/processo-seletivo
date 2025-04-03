document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    alert(`Seja Bem Vindo : ${name}\nSeu E-mail de contato é : ${email}\nE sua senha de acesso é : ${password}`);

    this.reset();

    document.getElementById("name").focus();
});