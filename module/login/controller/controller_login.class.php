<?php

    class controller_login {
        function view() {
            common::load_view('top_page_login.html', VIEW_PATH_LOGIN . 'login.html');
        }

        function validate_register() {
            echo json_encode(common::load_model('login_model', 'validate_register', $_POST));
        }

        function register() {
            echo json_encode(common::load_model('login_model', 'register', $_POST));
        }
        
        function validate_login() {
            echo json_encode(common::load_model('login_model', 'validate_login'));
        }

        function login() {
            echo json_encode(common::load_model('login_model', 'get_login'));
        }

        function logout() {
            echo json_encode(common::load_model('login_model', 'logout'));
        }

        function data_user() {
            echo json_encode(common::load_model('login_model', 'get_data_user'));
        }

        function controll_user() {
            echo json_encode(common::load_model('login_model', 'controll_user'));
        }

        function activity() {
            echo json_encode(common::load_model('login_model', 'activity'));
        }
    }
?>