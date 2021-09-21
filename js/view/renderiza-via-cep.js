function renderiza(apiResponse){

    $('#estado').val(`${apiResponse.uf}`)
    $('#bairro').val(`${apiResponse.bairro}`)
    $('#rua').val(`${apiResponse.logradouro}`)
}

function cadastroConcluido(){
        $("#concluido").css('display', 'block')
        $(".form-group").css('display', 'none')
        $("#submit").css('display', 'none')
        $("#titulo-field").css('display', 'none')
        $("body").css('height', '100%')
}

function erro(error){
    $('#titulo-field').html(`${error}`)
}
