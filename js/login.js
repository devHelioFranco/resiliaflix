let entrar = document.getElementById('entrar')
entrar.addEventListener('click', function(){
    return location = ('../index.html');
})

let home = document.getElementById('inscrever')
home.addEventListener('click', function(){
    return location = ('./signup.html');
})


let login
let senha
let input

const load = () => {
    const email = localStorage.getItem('email');
    login = email
    const password = localStorage.getItem('senha')
    senha = password
    const nome = localStorage.getItem('nome')
    input = nome
} 
window.onload = () => {
    load();
}

const botao = document.getElementById('sub')
botao.addEventListener('click',()=>{
    
    let inputLogin = document.getElementById('exampleInputEmail1').value 
    let inputPassword = document.getElementById('exampleInputPassword1').value
    try {

        if(login == inputLogin && senha == inputPassword){

            return location = ("./content.html")
        } else {
            throw new Error ('Login e Senha inválidos, tente novamente')
        }
    } catch (error){
        $('#titulo').html(`${error}`)
    }
})