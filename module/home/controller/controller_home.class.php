<?php

    class controller_home {
        function view() {
            common::load_view('top_page_home.html', VIEW_PATH_HOME . 'home.html');
        }

        function list_brands() {
            echo json_encode(common::load_model('home_model', 'get_brands'));
        }

        function list_categories() {
            echo json_encode(common::load_model('home_model', 'get_categories'));
        }

        function list_bodywork() {
            echo json_encode(common::load_model('home_model', 'get_bodywork'));
        }

        // function carousel() {
        //     echo json_encode(common::load_model('home_model', 'get_carousel'));
        // }

        // function categoria() {
        //     echo json_encode(common::load_model('home_model', 'get_categoria'));
        // }

        // function brands() {
        //     echo json_encode(common::load_model('home_model', 'get_brands', [$_POST['items'], $_POST['loaded']]));
        // }

        // function load_more() {
        //     echo json_encode(common::load_model('home_model', 'get_load_more'));
        // }

    }
?>