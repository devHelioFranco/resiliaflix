const cep=document.querySelector("#meuCep").value;

cep.addEventListener("blur", function (e){
console.log(cep.value)
let opcoes={
    method:"GET",
   mode:"cors",
   cache:"default"
}

fetch(`https://viacep.com.br/ws${cep}/json`, opcoes)
try{
then(response=>{ response.json()
.then(data=>console.log(data))
})
}
catch(erro=>console.log("Error: "+ erro,menssage))

})