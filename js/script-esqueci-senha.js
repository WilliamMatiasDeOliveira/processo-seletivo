document.getElementById("form-esqueci-senha").addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.getElementById("email").value;

    alert(`Um E-mail foi enviado para ${email}\nPor favor check sua caixa de menssagem`)

    this.reset();

    document.getElementById("email").focus();

});