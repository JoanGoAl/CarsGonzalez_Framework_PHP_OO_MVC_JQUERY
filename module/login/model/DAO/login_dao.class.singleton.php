<?php

    class login_dao {
        static $_instance;

        private function __construct() {
        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        function search_name($db, $name) {
    
            $sql = "SELECT * FROM user u
                    WHERE u.name_user = '$name'";

            $stmt = $db -> ejecutar($sql);
            return $db -> listar($stmt);
        }
    
        function search_email($db, $email) {    
            $sql = "SELECT * FROM user u
                    WHERE u.email_user = '$email'";
    
            $stmt = $db -> ejecutar($sql);
            return $db -> listar($stmt);
        }

        public function select_validate_register($db, $data) {

            $check_name = $this -> search_name($db, $data['name']);

            $check_email = $this -> search_email($db, $data['email']);

            if ($check_name && $check_email) {
                return "both_exist";
            } else if ($check_name){
                return "user_exist";
            } else if ($check_email){
                return "email_exist";
            } else {
                return "all_ok";
            }    
        }

        public function insert_register($db, $data) {
            $hashed_pass = password_hash($data['passwd'], PASSWORD_DEFAULT, ['cost' => 12]);

            $avatar = "https://api.multiavatar.com/". $data['name'] .".svg";

            $sql = "INSERT INTO `user`(`name_user`, `email_user`, `avatar_user`, `passwd_user`, `type_user`, `status_user`) 
                VALUES ('" .$data['name'] ."','" .$data['email'] ."', '$avatar','$hashed_pass','default','false')";

            $db -> ejecutar($sql);
            return $data['name'];
        }
    }

?>