  
let filme = ''
// Manipula input e chama requisição API
var botao = document.getElementById('pesquisaBotao')
botao.addEventListener('click' ,()=>{
    filme = $('#pesquisa-input').val();
    
    apiFilme(filme)
  
})





