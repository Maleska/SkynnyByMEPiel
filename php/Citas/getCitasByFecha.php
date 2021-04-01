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
<<<<<<< Updated upstream
		"SELECT citas.id, users.nombres, users.apellidos, users.telefono, users.email, servicios.descripcion AS 'servicio', servicios.costo AS 'costo', citas.fecha, citas.hora, estatus.descripcion AS 'status' 
=======
		"SELECT citas.id, users.nombres, users.apellidos,servicios.id AS 'idServicio', users.telefono, users.email, servicios.descripcion AS 'servicio', servicios.costo AS 'costo', citas.fecha, citas.hora, estatus.descripcion AS 'status' 
>>>>>>> Stashed changes
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
			'telefono' => $row['telefono'],
			'servicio' => $row['servicio'],
			'costo' => $row['costo'],
			'fecha' => $row['fecha'],
			'hora' => $row['hora'],
			'email' => $row['email'],
			'status' => $row['status'],
			'idservicio' => $row['idServicio']
		);
	}

	$conn->close();
	header('Content-Type: application/json'); 

	echo json_encode($table);

?>