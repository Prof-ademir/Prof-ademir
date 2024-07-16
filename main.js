let nomeUsuário = prompt("Qual o seu nome?");  
let elemento = document.querySelector("#nome-usuário");
elemento.textContent = nomeUsuário; 

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual é o seu nome?");
}
if(nomeUsuário == null){
    elemento.textContent = 'seja muito bem vindo.'; 
}else{
    elemento.textContent = nomeUsuário;
    
}

