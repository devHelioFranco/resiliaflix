let entrar = document.getElementById('entrar')
entrar.addEventListener('click', function(){
    return location = ('../index.html');
})

let inscrever = document.getElementById('inscrever')
inscrever.addEventListener('click', function(){
    return location = ('./login.html');
})





const salva = () => {
    localStorage.setItem('email', usuario);
}
const salva2 = () => {
    localStorage.setItem('senha', password);
}
const salva3 = () => {
    localStorage.setItem('nome', nomeInput);
}


let nome = document.getElementById('exampleInputName')
let email = document.getElementById('exampleInputEmail1')
let cadastro = document.getElementById('login')
var usuario
let senha = document.getElementById('inputPassword1')
var password 
var nomeInput

cadastro.addEventListener('change', ()=>{
    nomeInput = nome.value
    usuario = email.value
    password = senha.value
    salva()
    salva2()
    salva3()
    console.log('foi')
})

$('#meuCep').on('change', async function(){
   let cep = document.getElementById('meuCep').value
   const url = `https://viacep.com.br/ws/${cep}/json/`
   let apiResponse = await fetch(url).then(response => response.json());
   console.log(apiResponse)

   $('#estado').val(`${apiResponse.uf}`)
   $('#bairro').val(`${apiResponse.bairro}`)
   $('#rua').val(`${apiResponse.logradouro}`)
})

$("#submit").click(function(){
    $("#concluido").css('display', 'block')
    $(".form-group").css('display', 'none')
    $("#submit").css('display', 'none')
    $("#titulo-field").css('display', 'none')
    $("body").css('height', '100%')
});