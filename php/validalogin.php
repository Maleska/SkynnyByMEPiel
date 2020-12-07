<?php

session_start();

$servername = "localhost";
$database = "skinny";
$username = "root";
$password = "";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
//$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( $conn ) {
	
$username = $_POST['login'];

$password  = $_POST['password'];
  
	
	if ($resultado =mysqli_query($conn, "select count(id) as count from user where nombres = '$username' and password = '$password' and active =1")) {
    $row= mysqli_fetch_assoc($resultado);

   //echo( $row['count']);
		$cantidad =$row['count'];
	if($cantidad == 1){
		 echo "<script> location.href='../inicio.html'; </script>";
		 exit;
	}else{
		 echo "<script> location.href='../index.html'; </script>";
		 exit;
	}
}

}
$conn -> close();
?>