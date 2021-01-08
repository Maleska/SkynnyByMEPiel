<?php

session_start();

$servername = "localhost";
$database = "skinny";
$username = "root";
$password = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
//$conn = sqlsrv_connect( $serverName, $connectionInfo);
/*if($conn){
	echo("Se conecto");
}
else{
	echo("No se conecto");
}*/
if( $conn ) {

$username = $_POST['login'];

$password  = $_POST['password'];
	
	$query ="select count(id) as count from users where nombres = '$username' and password = '$password' and active =1";
	//echo($query);

	$resultado =mysqli_query($conn,$query );
	
	
	if ($resultado <> 0) {
		
    $row= mysqli_fetch_assoc($resultado);

   //echo( $row['count']);
		$cantidad =$row['count'];
	if($cantidad == 1){
		$_SESSION['rol'] ="recepcionista";
		//echo("alert('Si entro a la validacion')");
<<<<<<< Updated upstream:php/Sesion/validalogin.php
		 echo "<script src='../../assets/js/functions.js'></script>";
		 echo "<script>document.cookie = 'recepcionista'; 
		 var decodedCookie = decodeURIComponent(document.cookie);
		 //alert(decodedCookie);
		 //alert(document.cookie);
		 //alert('No entro o quisas si');
		 createCookie();
		 </script>";
		 echo "<script>  </script>";
		 //echo "<script> location.href='../inicio.html'; </script>";
=======
		 echo "<script> location.href='../inicio.html'; </script>";
>>>>>>> Stashed changes:php/validalogin.php
		 exit;
	}else{
		//echo("alert('No entro a la validacion)");
		 echo "<script> location.href='../index.html'; </script>";
		 exit;
	}
}

}
$conn -> close();
?>