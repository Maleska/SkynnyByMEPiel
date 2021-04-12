<?php

	session_start();
	
	 
	$servername = "72.249.55.42";
	$database = "skinnyby_skinny";
	$username = "skinnyby_remoto";
	$password = "Hehj900501";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $database);

	if( $conn ) {
		// echo "Conexión establecida.<br />";
		
	}else{
		 echo "Conexión no se pudo establecer.<br />";
		 die( print_r( sqlsrv_errors(), true));
	}

	$pagoid = $_POST['pagoid'];

	$query = 
		"SELECT pagos.id AS 'id', pagos.total, pagos.descuento, pagos.fechapago, metodospago.descripcion
		FROM pagos
		INNER JOIN citas ON pagos.idcita = citas.id 
		INNER JOIN metodospago ON pagos.idmetodopago = metodospago.id 
		INNER JOIN promociones ON pagos.idpromocion = promociones.id
		WHERE pagos.id = '$pagoid'";

	$result = mysqli_query($conn, $query);

	if($result === false){
		 die(print_r(mysqli_error(),true));
	}

	$cita = $result->fetch_assoc();

	$conn->close();
	
	header('Content-Type: application/json'); 

	echo json_encode($cita);

?>