<?php
	session_start();
	$username=$_POST['username'];
	$password=$_POST['password'];
	include_once('./mysql.php');
	$select="SELECT COUNT(*) as count from user where username='{$username}'";
	$result=mysqli_query($con,$select);
	$row=mysqli_fetch_array($result);
	if($row['count']==0){
		$insert="INSERT INTO user (username,password) values ('{$username}','{$password}')";
		mysqli_query($con,$insert);
		$id=mysqli_insert_id($con);
		$_SESSION['id']=$id;
		echo json_encode(array('error'=>0));
	}
	else
		echo json_encode(array('error'=>1));
?>