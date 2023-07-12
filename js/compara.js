let info = document.getElementsByClassName("info")
let senhas = document.getElementsByClassName("senhacompara")

function comparaSenhas(){
    if (senhas[0].value != senhas[1].value){
        info[0].style.display = "block"
        info[1].style.display = "block"
    }else{
        info[0].style.display = "none"
        info[1].style.display = "none"
    }
}

function enviaForms(){
    alert("Conta criada com sucesso!")
}