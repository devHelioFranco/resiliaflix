// const cep=document.querySelector("#meuCep").value;

// cep.addEventListener("blur", function (e){
// console.log(cep.value)
// let opcoes={
//     method:"GET",
//    mode:"cors",
//    cache:"default"
// }

// fetch(`https://viacep.com.br/ws${cep}/json`, opcoes)
// try{
// then(response=>{ response.json()
// .then(data=>console.log(data))
// })
// }
// catch(erro=>console.log("Error: "+ erro,menssage))

// })

let entrar = document.getElementById('entrar')
entrar.addEventListener('click', function(){
    return location = ('../index.html');
})

let inscrever = document.getElementById('inscrever')
inscrever.addEventListener('click', function(){
    return location = ('./login.html');
})