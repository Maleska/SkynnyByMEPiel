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
//print($username);
$password  = $_POST['password'];
    //echo "Conexión establecida.<br />";
	//$user = is_null($username);
	//$pass =var_dump(empty($password));
	
	//echo(' usuario ' . $username);
	//echo(' password ' .$password);
	//echo('usuario ' .$user);
	//echo('var '.is_null($username));
	/*if($username === "" && $password ===""){
				header("location:../index.html");
			exit();
	}*/
	/*if(empty($username)){
		echo '<script>window.location.href = "../index.html"; </script>';
		//echo 'Entro a qui';

	}
	if(empty($password)){
		echo '<script>window.location.href = "../index.html"; </script>';
			//exit();
	}*/
	
	if ($resultado =mysqli_query($conn, "select count(user) as count from account where user = '$username' and password = '$password' and activo =1")) {
    $row= mysqli_fetch_assoc($resultado);

   //echo( $row['count']);
		$cantidad =$row['count'];
	if($cantidad == 1){
		 echo "<script> location.href='../initRh.html'; </script>";
		 exit;
	}else{
		 echo "<script> location.href='../index.html'; </script>";
		 exit;
	}
}
	
/*$query = "select count(user) from account where user = '$username' and password = '$password' and activo =1";


	$valor = $conn->query($query);
	echo ' re' . $valor;
	$row = var_dump($valor);
		echo('valor ' . $row);

	//$tourresult = $valor->fetch_array()[0] ?? '';
	
	
	echo 'valid ' .$row;*/
	/*if($valor === ''){
		 echo "<script> location.href='../initRh.html'; </script>";
		exit;
	}else{
		 echo "<script> location.href='../index.html'; </script>";
		exit;
	}*/
//$result = mysqli_connect($conn, $query);  //$conn is your connection in 'connection.php'
#checks if the search was made
 /* comprobar la conexión */

//echo sqlsrv_fetch($result);

//echo (sqlsrv_has_rows($result));
/*if(!$result) {
        die( print_r( mysqli_error($conn), true) );
    }
	if($result){
	 echo "<script> location.href='../initRh.html'; </script>";
		exit;
	}else{
		//header("location:../index.html");
		//	exit();
		echo '<script>window.location.href = "../index.html"; </script>';
	}
}else{
	//echo '<script>window.location.href = "../index.html"; </script>';
	//header("location:../index.html");
	//		exit();
	 //echo "<script> location.href='../index.html'; </script>";
	//exit;
     //echo "Conexión no se pudo establecer.<br />";
     //die( print_r( mysqli_error($conn), true));
}*/

}
$conn -> close();
?>