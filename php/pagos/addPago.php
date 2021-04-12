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
	$idcita = $_POST['idcita'];
	$idmetodopago = $_POST['idmetodopago'];
	$idpromocion = $_POST['idpromocion'];
	$total = $_POST['total'];
	$fechapago = $_POST['fechapago'];
	$descuento = $_POST['descuento'];
		
	//$hoy = getdate();
	
	$query = "INSERT INTO pagos (idcita, idmetodopago, idpromocion, total, fechapago, descuento) 
				VALUES('$idcita','$idmetodopago','$idpromocion','$total','$fechapago', '$descuento')";
	
	if($conn ->query($query) === TRUE){
		echo "PAGO GUARDADO EXITOSAMENTE";
	} else {
		echo "ERROR AL GUARDAR PAGO";
	}

 
}

$conn -> close();
?>