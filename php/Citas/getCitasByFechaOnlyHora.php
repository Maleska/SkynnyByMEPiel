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

	$fecha = $_POST['fecha'];

	$query = 
		"SELECT citas.id, users.nombres, users.apellidos, servicios.descripcion AS 'servicio', citas.fecha, citas.hora, estatus.descripcion AS 'status' 
		FROM citas
		INNER JOIN users ON citas.iduser = users.id 
		INNER JOIN servicios ON citas.idservicio = servicios.id 
		INNER JOIN estatus ON citas.idestatus = estatus.id
		WHERE citas.fecha = '$fecha'";

	$result = mysqli_query($conn,$query);

	if($result === false){
		 die(print_r(mysqli_error(),true));
	}

	$table = array();
	while($row = mysqli_fetch_array($result)){
		$table[] = $row['hora'];
	}

	$conn->close();
	header('Content-Type: application/json');

	echo json_encode($table);

?>