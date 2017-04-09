<?php
	session_start();
	$username=$_POST['username'];
	$password=$_POST['password'];
	include_once('./mysql.php');
	$select="SELECT COUNT(*) as count,id from user where username='{$username}' and password='{$password}'";
//	echo $select;
	$result=mysqli_query($con,$select);
	$row=mysqli_fetch_array($result);
	if($row['count']==1){
		$_SESSION['id']=$row['id'];
		echo json_encode(array('username'=>$username));
	}
	else
		echo json_encode(array('username'=>''));
?>