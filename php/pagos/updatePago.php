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
	$idpago = $_POST['idpago'];
	$idcita = $_POST['idcita'];
	$idmetodopago = $_POST['idmetodopago'];
	$idpromocion = $_POST['idpromocion'];
	$total = $_POST['total'];
	$fechapago = $_POST['fechapago'];
	$descuento = $_POST['descuento'];

	if(isset($servicio)){
	
	$query = "UPDATE pagos
				SET idcita = $idcita, idmetodopago = '$idmetodopago', idpromocion = '$idpromocion', total = $total, fechapago = $fechapago, descuento = $descuento, 
				WHERE id = $idpago";
	//echo($query);
	
		if($conn ->query($query) === TRUE){
			echo "PAGO ACTUALIZADO CORRECTAMENTE";
		} else {
			echo "ERROR";
		}
	}
 
}

$conn -> close();
?>