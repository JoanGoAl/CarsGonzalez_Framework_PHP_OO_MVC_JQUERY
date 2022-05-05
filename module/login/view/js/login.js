function load_login() {
    let container_login = document.getElementById('container-login')
    let main_login = document.createElement('div')
    let inputchk = document.createElement('input')
    let login = document.createElement('div')

    let form_login = document.createElement('form')
    let label_login = document.createElement('label')
    let label_signup = document.createElement('label')

    let inputname_login = document.createElement('input')
    let span_name_login = document.createElement('span')
        // let inputemail_login = document.createElement('input')
    let inputpasswd_login = document.createElement('input')
    let span_passwd_login = document.createElement('span')

    let div_scroll = document.createElement('div')

    let inputname_signup = document.createElement('input')
    let span_name_signup = document.createElement('span')
    let inputemail_signup = document.createElement('input')
    let span_email_signup = document.createElement('span')
    let inputpasswd_signup = document.createElement('input')
    let span_passwd_signup = document.createElement('span')
    let inputpasswd2_signup = document.createElement('input')
    let span_passwd2_signup = document.createElement('span')

    let loginbutton = document.createElement('input')
    let signupbutton = document.createElement('input')

    let signup = document.createElement('div')
    let form_signup = document.createElement('form')

    main_login.className = 'main-login'

    inputchk.type = 'checkbox'
    inputchk.id = 'chk'
    inputchk.ariaHidden = ''

    login.className = 'login'

    form_login.className = 'form-login'
    form_login.id = 'form-login'

    label_login.setAttribute('for', 'chk')
    label_login.setAttribute('aria-hidden', 'true')
    label_login.appendChild(document.createTextNode('Login'))

    label_signup.setAttribute('for', 'chk')
    label_signup.ariaHidden = ''
    label_signup.appendChild(document.createTextNode('Register'))

    inputname_login.type = 'text'
    inputname_login.name = 'name'
    inputname_login.placeholder = 'User name'
    inputname_login.setAttribute('required', '')
    inputname_login.style = 'height: 30px;'
    inputname_login.id = 'name-login'

    // inputemail_login.type = 'email'
    // inputemail_login.name = 'email'
    // inputemail_login.placeholder = 'Email'
    // inputemail_login.setAttribute('required', '')
    // inputemail_login.style = 'height: 30px;'

    inputpasswd_login.type = 'password'
    inputpasswd_login.name = 'passwd'
    inputpasswd_login.placeholder = 'Password'
    inputpasswd_login.setAttribute('required', '')
    inputpasswd_login.style = 'height: 30px;'
    inputpasswd_login.id = 'passwd-login'

    span_name_login.id = 'error_name_login'
    span_name_login.className = 'error'
    span_passwd_login.id = 'error_passwd_login'
    span_passwd_login.className = 'error'

    div_scroll.id = 'container-register'

    inputname_signup.type = 'text'
    inputname_signup.name = 'name'
    inputname_signup.placeholder = 'User name'
    inputname_signup.setAttribute('required', '')
    inputname_signup.style = 'height: 30px;'
    inputname_signup.id = 'name-register'

    inputemail_signup.type = 'email'
    inputemail_signup.name = 'email'
    inputemail_signup.placeholder = 'Email'
    inputemail_signup.setAttribute('required', '')
    inputemail_signup.style = 'height: 30px;'
    inputemail_signup.id = 'email-register'

    inputpasswd_signup.type = 'password'
    inputpasswd_signup.name = 'passwd'
    inputpasswd_signup.placeholder = 'Password'
    inputpasswd_signup.setAttribute('required', '')
    inputpasswd_signup.style = 'height: 30px;'
    inputpasswd_signup.id = 'passwd-register'

    inputpasswd2_signup.type = 'password'
    inputpasswd2_signup.name = 'passwd2'
    inputpasswd2_signup.placeholder = 'Repeat password'
    inputpasswd2_signup.setAttribute('required', '')
    inputpasswd2_signup.style = 'height: 30px;'
    inputpasswd2_signup.id = 'passwd2-register'

    loginbutton.id = 'login-butt'
    loginbutton.type = 'button'
    loginbutton.value = 'Login'

    signupbutton.id = 'register-butt'
    signupbutton.type = 'button'
    signupbutton.value = 'Register'

    signup.className = 'signup'
    form_signup.className = 'form-signup'
    form_signup.id = 'form-signup'

    span_name_signup.id = 'error_name'
    span_name_signup.className = 'error'
    span_email_signup.id = 'error_email'
    span_email_signup.className = 'error'
    span_passwd_signup.id = 'error_passwd'
    span_passwd_signup.className = 'error'
    span_passwd2_signup.id = 'error_passwd2'
    span_passwd2_signup.className = 'error'

    container_login.appendChild(main_login)
    main_login.appendChild(inputchk)

    main_login.appendChild(login)
    login.appendChild(form_login)

    form_login.appendChild(label_login)
    form_login.appendChild(inputname_login)
    form_login.appendChild(span_name_login)
    form_login.appendChild(inputpasswd_login)
    form_login.appendChild(span_passwd_login)
    form_login.appendChild(loginbutton)

    main_login.appendChild(signup)
    signup.appendChild(form_signup)

    form_signup.appendChild(label_signup)
    form_signup.appendChild(div_scroll)
    div_scroll.appendChild(inputname_signup)
    div_scroll.appendChild(span_name_signup)
    div_scroll.appendChild(inputemail_signup)
    div_scroll.appendChild(span_email_signup)
    div_scroll.appendChild(inputpasswd_signup)
    div_scroll.appendChild(span_passwd_signup)
    div_scroll.appendChild(inputpasswd2_signup)
    div_scroll.appendChild(span_passwd2_signup)
    form_signup.appendChild(signupbutton)

}

function button_register() {

    $('#register-butt').on('click', function() {
        register();
    });

}

function validate_register() {

    // let userName_exp = /^[a-zA-Z0-9]+$/;
    let email_exp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    let passwd_exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let error = false;

    let passwd = document.getElementById('passwd-register');
    let passwd2 = document.getElementById('passwd2-register');

    if (!email_exp.test(document.getElementById('email-register').value)) {
        document.getElementById('error_email').innerHTML = 'El email no es valido';
        error = true;
    } else {
        document.getElementById('error_email').innerHTML = '';
    }

    if (passwd.value.length === 0) {
        document.getElementById('error_passwd2').innerHTML = 'Tienes que escribir una contraseña';
        error = true;
    } else if (!passwd_exp.test(passwd.value)) {
        document.getElementById('error_passwd').innerHTML = 'La contraseña no es lo suficiente segura';
        error = true;
    } else {
        document.getElementById('error_passwd').innerHTML = '';
        if (passwd.value != passwd2.value) {
            document.getElementById('error_passwd2').innerHTML = 'Las contraseñas no coinciden';
            error = true;
        } else {
            document.getElementById('error_passwd2').innerHTML = '';
            document.getElementById('error_passwd').innerHTML = '';
        }
    }

    if (error == true) {
        return 0;
    }

}

function register() {

    if (validate_register() != 0) {

        let data = $('#form-signup').serializeObject();

        url = friendlyURL("?page=login&op=validate_register")
        ajaxPromise("POST", url, "json", data)
            .then((res) => {

                switch (res) {
                    case 'user_exist':
                        document.getElementById('error_name').innerHTML = 'Este nombre no esta disponible';
                        document.getElementById('error_email').innerHTML = '';
                        break;

                    case 'email_exist':
                        document.getElementById('error_email').innerHTML = 'Este email no esta disponible';
                        document.getElementById('error_name').innerHTML = '';
                        break;

                    case 'both_exist':
                        document.getElementById('error_name').innerHTML = 'Este nombre no esta disponible';
                        document.getElementById('error_email').innerHTML = 'Este email no esta disponible';
                        break;

                    default:
                        document.getElementById('error_name').innerHTML = '';
                        document.getElementById('error_email').innerHTML = '';
                        break;
                }

                if (res == "all_ok") {
                    url = friendlyURL("?page=login&op=register")
                    ajaxPromise("POST", url, "json", data)
                        .then((res) => {
                            toastr.success(res + " te has registrado con exito");
                            // window.location.href = "index.php?modules=controller_home"
                            // ajaxPromise("POST", "modules/login/ctrl/controller_login.php?op=login", "json", data)
                            //     .then((res) => {

                            //         localStorage.setItem('token', res);
                            //         window.location.href = "index.php?modules=controller_home"

                            //     }).catch(function() {
                            //         console.log('Error login')
                            //     })
                        }).catch(function() {
                            console.log('Error insert user')
                        })
                }

            }).catch(function() {
                console.log('Error comprobacion usuario/email')
            })

    }

}

function button_login() {

    $('#login-butt').on('click', function() {
        login();
    });

}

function validate_login() {

    let name_login = document.getElementById('name-login');
    let passwd_login = document.getElementById('passwd-login');
    let error = false;

    if (name_login.value.length === 0) {
        document.getElementById('error_name_login').innerHTML = 'Tienes que introducir un nombre';
        error = true;
    } else {
        document.getElementById('error_name_login').innerHTML = '';
    }

    if (passwd_login.value.length === 0) {
        document.getElementById('error_passwd_login').innerHTML = 'Tienes que introducir una contraseña';
        error = true;
    } else {
        document.getElementById('error_passwd_login').innerHTML = '';
    }

    if (error == true) {
        return 0;
    }
}

function login() {

    let data = $('#form-login').serializeObject();

    if (validate_login() != 0) {

        ajaxPromise("POST", "modules/login/ctrl/controller_login.php?op=validate-login", "json", data)
            .then((res) => {

                console.log(res);

                switch (res) {
                    case 'name_not_exist':
                        document.getElementById('error_name_login').innerHTML = 'El nombre no existe';
                        break;

                    case 'passwd_not_match':
                        document.getElementById('error_passwd_login').innerHTML = 'Contraseña incorrecta';
                        break;
                    default:
                        document.getElementById('error_name_login').innerHTML = '';
                        document.getElementById('error_passwd_login').innerHTML = '';
                        break;
                }

                if (res == 'all_ok') {
                    ajaxPromise("POST", "modules/login/ctrl/controller_login.php?op=login", "json", data)
                        .then((res) => {

                            localStorage.setItem('token', res);
                            window.location.href = "index.php?modules=controller_home"

                        }).catch(function() {
                            console.log('Error login')
                        })

                }

            }).catch(function() {
                console.log('Error validate login')
            })

    }
}

$(document).ready(function() {
    load_login();
    button_register();
    button_login();
});