<?php
	session_start();
	if(!isset($_SESSION['id'])){
		$response['username']='';
		echo json_encode($response);
		exit;
	}
	$id=$_SESSION['id'];
	include_once('./mysql.php');
	$select="SELECT * from user where id='{$id}'";
	$result=mysqli_query($con,$select);
	$row=mysqli_fetch_assoc($result);
	$username=$row['username'];
	$response['username']=$username;
	echo json_encode($response);
?>