function viacep(cep){
    
    const url = `https://viacep.com.br/ws/${cep}/json/`
    let apiResponse = await fetch(url).then(response => response.json());
    return apiResponse
}