<?php

	session_start();
	/*
	if(isset($_SESSION['rol']))
	{
		 echo "<script> location.href='../index.html'; </script>";
		die();
	}*/
	 
	$servername = "localhost";
	$database = "skinny";
	$username = "root";
	$password = "";

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $database);

	if( $conn ) {
		// echo "Conexión establecida.<br />";
		
	}else{
		 echo "Conexión no se pudo establecer.<br />";
		 die( print_r( sqlsrv_errors(), true));
	}

	$query = 
		"SELECT pagos.id AS 'id', pagos.total, pagos.descuento, pagos.fechapago, metodospago.descripcion
		FROM pagos
		INNER JOIN citas ON pagos.idcita = citas.id 
		INNER JOIN metodospago ON pagos.idmetodopago = metodospago.id 
		INNER JOIN promociones ON pagos.idpromocion = promociones.id";

	$result = mysqli_query($conn,$query);

	if($result === false){
		 die(print_r(mysqli_error(),true));
	}

	$table = array();
	while($row = mysqli_fetch_array($result)){
		$table []= array(
			'id' => $row['id'],
			'total' => $row['total'],
			'descuento' => $row['descuento'],
			'fechapago' => $row['fechapago'],
			'descripcion' => $row['descripcion']
		);
	}

	$conn->close();
	header('Content-Type: application/json');

	echo json_encode($table);

?>