<?php

	session_start();
	/*
	if(isset($_SESSION['rol']))
	{
		 echo "<script> location.href='../index.html'; </script>";
		die();
	}*/
	 
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

	$query = 
		"SELECT id, descripcion
		FROM metodospago
		WHERE active = true";

	$result = mysqli_query($conn,$query);

	if($result === false){
		 die(print_r(mysqli_error(),true));
	}

	$table = array();
	while($row = mysqli_fetch_array($result)){
		$table []= array(
			'id' => $row['id'],
			'descripcion' => $row['descripcion']
		);
	}

	$conn->close();
	header('Content-Type: application/json');

	echo json_encode($table);

?>