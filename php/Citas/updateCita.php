<?php
session_start();

	$servername = "72.249.55.42";
	$database = "skinnyby_skinny";
	$username = "skinnyby_remoto";
	$password = "Hehj900501";


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
	$citaid = $_POST['citaid'];
	$servicio = $_POST['servicio'];
	$fecha = $_POST['fecha'];
	$hora = $_POST['hora'];
	$estatus = $_POST['estatus'];
	$medio = $_POST['medio'];

	if(isset($servicio)){
	
	$query = "UPDATE citas
				SET idservicio = $servicio, fecha = '$fecha', hora = '$hora', idestatus = $estatus, idmedio = $medio
				WHERE id = $citaid";
	//echo($query);
	
		if($conn ->query($query) === TRUE){
			echo "REGISTRO ACTUALIZADO CORRECTAMENTE";
		} else {
			echo "ERROR";
		}
	}
 
}

$conn -> close();
?>