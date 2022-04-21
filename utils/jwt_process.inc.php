<?php
class jwt_process {
    public static function encode($user) {
        $jwt = parse_ini_file(UTILS . "jwt.ini");
        $header = '{"typ": ' . '"' . $jwt['Header']['typ'] . '", "alg": ' . '"' . $jwt['Header']['alg'] . '"}';
        $secret = $jwt['Secret']['key'];
        $payload = json_encode(['iat' => time(), 'exp' => time() + (60 * 60), 'name' => $user]);
        $JWT = new jwt();
        return $JWT -> encode($header, $payload, $secret);
    }

    public static function decode($token) {
        $jwt = parse_ini_file(UTILS . "jwt.ini");
        $JWT = new jwt();
        return $JWT -> decode($token, $jwt['Secret']['key']);
    }
}