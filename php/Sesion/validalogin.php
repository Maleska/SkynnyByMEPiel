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
	
	$query ="select * from users where nombres = '$username' and password = '$password' and active =1";
	//echo($query);

	$resultado =mysqli_query($conn,$query );
	
	
	if ($resultado !== false) {
		
    //$row= mysqli_fetch_assoc($resultado);

   //echo( $row['count']);
		
		$table = array();
	while($row = mysqli_fetch_array($resultado)){
		$_SESSION["rol"] =$row['idrol'] ;
		//session_regenerate_id();
		$_COOKIE["valida"] = "activo";
		//echo("alert('"+ $_SESSION["rol"] +"')");
		  $idrol=$row['idrol'];
		 echo "<script src='../../assets/js/functions.js'></script>";
		 echo "<script>document.cookie = '$idrol'; 
		 var decodedCookie = decodeURIComponent(document.cookie);
		 createCookie('$idrol');
		 </script>";
		 echo "<script>  </script>";
	};
	
		//$conn->close();
	//header('Content-Type: application/json');
		
	/*	$cantidad =$row['count'];
	if($cantidad == 1){
		$_SESSION["rol"] ="recepcionista";
		//session_regenerate_id();
		$_COOKIE["valida"] = "activo";
		//echo("alert('Si entro a la validacion')");
		 echo "<script src='../../assets/js/functions.js'></script>";
		 echo "<script>document.cookie = 'recepcionista'; 
		 var decodedCookie = decodeURIComponent(document.cookie);
		 //alert(decodedCookie);
		 //alert(document.cookie);
		 //alert('No entro o quisas si');
		 createCookie('"+  +"');
		 </script>";
		 echo "<script>  </script>";
		 //echo "<script> location.href='../inicio.html'; </script>";
		 exit;*/
		echo "<script> location.href='../../inicio.html'; </script>";
	}else{
		//echo("alert('No entro a la validacion)");
		 echo "<script> location.href='../index.html'; </script>";
		 exit;
	}
}


$conn -> close();
?>