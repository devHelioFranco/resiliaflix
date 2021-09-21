//Requisição de API e decisões a serem tomadas && tratamento de erros com Try/catch
async function  apiFilme(filme){
    const key = "c63395a9"
    let url =  `https://www.omdbapi.com/?apikey=${key}&t=${filme}`
    let apiResponse = await fetch(url).then(response => response.json());
   console.log(apiResponse)
   try{
       if(apiResponse.Title !== undefined){
        sucessoApi(apiResponse)
       } else {
           throw new Error ('O filme não foi encontrado, nosso buscador funciona apenas com titulos em seu idioma <strong>original</strong>. <br> Tente pesquisar em <strong>inglês.</strong>')
       }
    }catch(error){
        erroApi(error)
   }
   
}