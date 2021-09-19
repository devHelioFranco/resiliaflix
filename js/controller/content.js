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

