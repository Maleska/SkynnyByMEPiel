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
$servicio = $_POST['servicio'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$medio = $_POST['medio'];
	
//$hoy = getdate();
	
$a=getdate("d/m/Y H:i:s");

	if(isset($servicio)){
	
	$query = "Insert Into users (idrol,nombres,apellidos,telefono,email) values(2,'$nombre','$apellido','$telefono','$email')";
	//echo($query);
	/*echo "REGISTRO PACIENTE";
		if($conn ->query($query) === TRUE){
			echo "ENTRA AL IF";
			echo "INSERT INTO citas (iduser,idservicio,fecha,hora,idmedio,idestatus) values ('5',$servicio,'$fecha','$hora',$medio,1 )"
			$query = "";
			$lastid = $conn->insert_id;

			$query="INSERT INTO citas (iduser,idservicio,fecha,hora,idmedio,idestatus) values ('$lastid',$servicio,'$fecha','$hora',$medio,1 )";
echo ".$query.";
			$conn->query($query);
			//header("location:../index.html");
			//echo('<script>window.location.href="./index.html";</script>');

		} else {
			echo "NO ENTRA";
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
echo "REGISTRO CITA GUARDADO";
$conn -> close();
?>