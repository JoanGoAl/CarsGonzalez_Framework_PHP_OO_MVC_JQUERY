<?php
    class login_bll {
        private $dao;
		private $db;
		static $_instance;

		function __construct() {
			$this -> dao = login_dao::getInstance();
			$this -> db = db::getInstance();
		}

        public static function getInstance() {
			if (!(self::$_instance instanceof self)) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

        public function validate_register_BLL($data) {
            return $this -> dao -> select_validate_register($this -> db, $data);
        }

        public function register_BLL($data) {
            return $this -> dao -> insert_register($this -> db, $data);
        }
    }

?>