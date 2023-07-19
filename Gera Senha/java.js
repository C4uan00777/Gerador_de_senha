let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!";
let novaSenha = "";
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}
function geradorSenha(){
    let senha = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
 senha += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = senha;
    novaSenha = senha;
}
function CopiaSenha(){
    alert("senha copiada com sucesso! ");
    navigator.clipboard.writeText(novaSenha);
}
