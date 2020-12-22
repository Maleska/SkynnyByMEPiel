<?php

	session_start();
	
	 
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

	$citaId = $_POST['citaid'];

	$query = 
		"SELECT citas.id, users.nombres, users.apellidos, servicios.descripcion AS 'servicio', citas.fecha, citas.hora, estatus.descripcion AS 'status' 
		FROM citas
		INNER JOIN users ON citas.iduser = users.id 
		INNER JOIN servicios ON citas.idservicio = servicios.id 
		INNER JOIN estatus ON citas.idestatus = estatus.id
		WHERE citas.id = '$citaId'";

	$result = mysqli_query($conn, $query);

	if($result === false){
		 die(print_r(mysqli_error(),true));
	}

	$cita = $result->fetch_assoc();

	$conn->close();
	
	header('Content-Type: application/json'); 

	echo json_encode($cita);

?>