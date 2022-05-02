function infoContact() {
    $('.send').on('click', function() {

        let check = {
            name: 1,
            email: 1,
            phone: 1,
            message: 1
        }

        $('#nameContact').val() == "" ? toastr.warning('Escribe un nombre') : check['name'] = 0;
        $('#emailContact').val() == "" ? toastr.warning('Escribe un email') : check['email'] = 0;
        $('#phoneContact').val() == "" ? toastr.warning('Escribe un telefono') : check['phone'] = 0;
        $('#messageContact').val() == "" ? toastr.warning('Escribe un mensaje') : check['message'] = 0;

        if (check['name'] == 0 && check['email'] == 0 && check['phone'] == 0 && check['message'] == 0) {

            let info = {
                name: $('#nameContact').val(),
                email: $('#emailContact').val(),
                phone: $('#phoneContact').val(),
                message: $('#messageContact').val()
            }

            $('#nameContact').attr('disabled', true)
            $('#emailContact').attr('disabled', true)
            $('#phoneContact').attr('disabled', true)
            $('#messageContact').attr('disabled', true)
            $('#sendContact').attr('disabled', true)


            toastr.info('Enviando mensaje');

            url = friendlyURL("?page=contact&op=sendinfo")
            ajaxPromise("POST", url, "json", info)
                .then(function(info) {

                    if (info == "Mensaje enviado") {
                        toastr.success("Mensaje enviado con exito");
                    } else {
                        toastr.error("No se ha podido enviar el mensaje, compruebe el correo electronico o intentalo mas tarde")
                        $('#nameContact').attr('disabled', false)
                        $('#emailContact').attr('disabled', false)
                        $('#phoneContact').attr('disabled', false)
                        $('#messageContact').attr('disabled', false)
                        $('#sendContact').attr('disabled', false)
                    }

                    console.log(info);

                }).catch(function() {
                    console.log('error send contact')
                })
        }

    });
}

$(document).ready(function() {
    infoContact()
});