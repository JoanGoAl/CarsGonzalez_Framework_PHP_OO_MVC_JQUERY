<?php

    class controller_contact {
        function view() {
            common::load_view('top_page_contact.html', VIEW_PATH_CONTACT . 'contact.html');
        }

        function sendinfo() {

            $check = mail::contactMail($_POST['name'], $_POST['email'], $_POST['message']);
            echo json_encode($check);
        }

    }
?>