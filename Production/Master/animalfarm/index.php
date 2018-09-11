<?php
	function conn(){
		$servername = "localhost";
		$username = "zp10959_farm";
		$password = "";
		$dbname = "zp10959_farm";
		$conn = new mysqli($servername, $username, $password, $dbname);

		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 
		else{
			return $conn;
		}
	}
?>