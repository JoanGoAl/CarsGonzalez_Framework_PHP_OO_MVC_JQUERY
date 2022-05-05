<?php

    class login_model {
        private $bll;
        static $_instance;

        function __construct(){
            $this -> bll = login_bll::getInstance();
        }

        public static function getInstance() {
            if (!(self::$_instance instanceof self)) {
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function validate_register($data) {
            return $this -> bll -> validate_register_BLL($data);
        }

        public function register($data) { 
            return $this -> bll -> register_BLL($data);
        }

    }

?>