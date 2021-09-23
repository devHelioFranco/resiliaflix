let envio = document.getElementById('enviar')

envio.addEventListener('click', ()=>{
    let email = $('#exampleInputEmail1').val()

    try{
    if(email.indexOf('@') > -1){

        $('#titulo').html('Um link de recuperação foi enviado para o seu email!')

    } else {
        throw new Error ('Email invalido, por favor tente novamente!')

    }}catch (error){
        $('#titulo').html(`${error}`)
    }
})

