//Renderiza informações na tela de acordo com ATRIBUTOS DE OBJETO
function sucessoApi(apiResponse){
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

function erroApi(error){
    $('.list-content').css('display', 'none')
    $('infoFilme').css('display', 'flex')
    $('#tituloFilme').html(`${error}`)
}