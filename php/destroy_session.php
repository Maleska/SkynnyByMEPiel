<?php
    session_start();
    $_SESSION = array();
    if (ini_get("rol")) {
       $params = session_get_cookie_params();
       setcookie(session_name(), '', time() - 42000
       );
    }
    session_destroy();

?>
