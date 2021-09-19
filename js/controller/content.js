let input 
const load = () => {
    const email = localStorage.getItem('email');
    login = email
    const password = localStorage.getItem('senha')
    senha = password
    const nome = localStorage.getItem('nome')
    input = nome

    document.querySelector('.hnome').innerHTML = input;
} 
window.onload = () => {
    load();
}


let contato = document.getElementById('entrar')
contato.addEventListener('click', ()=>{
    console.log ('teste')
    return location = ('./contact.html')
})

let sair = document.getElementById('inscrever')
sair.addEventListener('click', ()=>{
    console.log ('teste2')
    return location = ('../index.html')
})


