<?php

session_start();

echo "Nombre de rol es : " . $_SESSION['rol'];

if(isset($_SESSION['rol'])){
        // Calcular el tiempo de vida de la sesión (TTL = Time To Live)
       
            session_destroy();
            header("Location: ../index.htmlm");
        echo "fallo";
    }else{
	
}

if (isset($_COOKIE["valida"])) {
       echo "active" .$_COOKIE["valida"]  .$_SESSION["rol"];
} else {
       echo "don't see one" .$_COOKIE["valida"] ;
}

$has_session = session_status() == PHP_SESSION_ACTIVE;

echo $has_session;
?>