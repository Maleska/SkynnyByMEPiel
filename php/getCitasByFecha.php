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

	$fecha = $_POST['fecha'];

	$query = 
		"SELECT citas.id, users.nombres, users.apellidos, users.telefono, users.email, servicios.descripcion AS 'servicio', citas.fecha, citas.hora, estatus.descripcion AS 'status' 
		FROM citas
		INNER JOIN users ON citas.iduser = users.id 
		INNER JOIN servicios ON citas.idservicio = servicios.id 
		INNER JOIN estatus ON citas.idestatus = estatus.id
		WHERE citas.fecha = '$fecha'
		ORDER BY hora";

	$result = mysqli_query($conn,$query);

	if($result === false){
		 die(print_r(mysqli_error(),true));
	}

	$table = array();
	while($row = mysqli_fetch_array($result)){
		$table []= array(
			'id' => $row['id'],
			'nombre' => $row['nombres'],
			'apellido' => $row['apellidos'],
			'email' => $row['email'],
			'telefono' => $row['telefono'],
			'servicio' => $row['servicio'],
			'fecha' => $row['fecha'],
			'hora' => $row['hora'],
			'telefono' => $row['telefono'],
			'email' => $row['email'],
			'status' => $row['status']
		);
	}

	$conn->close();
	header('Content-Type: application/json'); 

	echo json_encode($table);

?>