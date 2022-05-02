<?php

    class controller_contact {
        function view() {
            common::load_view('top_page_contact.html', VIEW_PATH_CONTACT . 'contact.html');
        }

        function sendinfo() {
            include "utils/mail.inc.php";
            // echo json_encode(Mail::contactMail("Moises", "gfmois@gmail.com", "Primer mensaje de prueba"));
            echo json_encode(Mail::contactMail($_POST['name'], $_POST['email'], $_POST['message']));
        }

    }
?>