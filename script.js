let something = document.querySelectorAll("input");
let submit = document.querySelector("button");


submit.onclick = enviarForm;

function enviarForm(){
    if(something[0].value == "" ){
        alert("Por favor preencha o seu nome ");
    }
    if( something[1].value == ""){
        alert("Preencha seu sobrenome corretamente");
    }
    if(something[2].value == ""){
        alert("Preencha seu e-mail corretamente");
    }
    else{
        
            alert("Ola "+" "+something[0].value+" "+something[1].value+"seu email "+something[2].value+" Sera armazenado obrigado");
        
    }
    
}