<?php

session_start();

if(isset($_SESSION['rol']))
{
     echo "<script> location.href='../index.html'; </script>";
	die();
}
 
$servername = "localhost";
$database = "skinny";
$username = "root";
$password = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
echo($conn);
if( $conn ) {
    // echo "Conexión establecida.<br />";
}else{
     echo "Conexión no se pudo establecer.<br />";
     die( print_r( sqlsrv_errors(), true));
}
$query = "SELECT T0.id,T1.nombres,T1.apellidos,T2.descripcion as 'servicio',T0.fecha,T0.hora,T3.descripcion as 'status' FROM citas T0 inner join users T1 on T0.iduser = T1.id INNER JOIN servicios T2 on T0.idservicio = T2.id INNER JOIN estatus T3 on t0.idestatus = T3.id";

$result = mysqli_query($conn,$query);

if($result === false){
	 die(print_r(mysqli_error(),true));
}

$table = array();
while($row = mysqli_fetch_array($result)){
	$table []= array(
		'id' => $row['id'],
		'nombre' => $row['nombre'],
		'apellido' => $row['apellido'],
		'servicio' => $row['servicio'],
		'fecha' => $row['fecha'],
		'hora' => $row['hora'],
		'status' => $row['status']
	);
}

$conn->close();
 header('Content-Type: application/json');
echo json_encode($table);

//return json_encode($table);


?>