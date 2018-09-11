<?php
	function conn(){
		$servername = "localhost";
		$username = "zp10963_farm";
		$password = "0EFaGHRBhC4D";
		$dbname = "zp10963_farm";
		$conn = new mysqli($servername, $username, $password, $dbname);

		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 
		else{
			return $conn;
		}
	}
?>