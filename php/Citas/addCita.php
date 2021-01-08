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
$servicio = $_POST['servicio'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
	
//$hoy = getdate();
	
$a=date("Y-m-d H:i:s");

	if(isset($servicio)){
	
	$query = "Insert Into users (idrol,nombres,apellidos,telefono,email) values(4,'$nombre','$apellido','$telefono','$email')";
	//echo($query);
	
		if($conn ->query($query) === TRUE){
			$query = "";
			$lastid = $conn->insert_id;

			$query="Insert into citas (iduser,idservicio,fecha,hora,idestatus) values ('$lastid',$servicio,'$fecha','$hora',1)";

			$conn->query($query);
			header("location:../index.html");
			echo('<script>window.location.href="./index.html";</script>');

		}
	}
	/*$resultado =mysqli_query($conn,$query );
	
	
	if ($resultado <> 0) {
		
    $row= mysqli_fetch_assoc($resultado);

   //echo( $row['count']);
		$cantidad =$row['count'];
	if($cantidad == 1){
		$_SESSION['rol'] ="recepcionista";
		//echo("alert('Si entro a la validacion')");
		 echo "<script> location.href='../inicio.html'; </script>";
		 exit;
	}else{
		//echo("alert('No entro a la validacion)");
		 echo "<script> location.href='../index.html'; </script>";
		 exit;
	}*/


}
$conn -> close();
?>