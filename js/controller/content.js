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

let filme = ''
// uso de APi
var botao = document.getElementById('pesquisaBotao')
botao.addEventListener('click' ,()=>{
    filme = $('#pesquisa-input').val();
    
    apiFilme(filme)
  
})

async function  apiFilme(filme){
    const key = "c63395a9"
    let url =  `https://www.omdbapi.com/?apikey=${key}&t=${filme}`
    let apiResponse = await fetch(url).then(response => response.json());
   console.log(apiResponse)
   $('.list-content').css('display', 'none')
   $('#infoFilme').css('display', 'flex')
   $('#tituloFilme').html(`${apiResponse.Title}`)
   $('#diretor').html(`Diretor: ${apiResponse.Director}`)
   $('#ano').html(`Ano: ${apiResponse.Year}`)
   $('#lancamento').html(`Lançamento: ${apiResponse.Release}`)
   $('#duracao').html(`Duração: ${apiResponse.Runtime}`)
   $('#historia').html(`Sinopse: ${apiResponse.Plot}`)
   $('#poster').html(`<img src="${apiResponse.Poster}">`)
  
}



