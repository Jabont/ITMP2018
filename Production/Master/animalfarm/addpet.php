<?php
	function conn(){
		$servername = "localhost";
		$username = "zp10960_farm";
		$password = "jbBF2S34DwdDfvN";
		$dbname = "zp10960_farm";
		$conn = new mysqli($servername, $username, $password, $dbname);

		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 
		else{
			return $conn;
		}
	}
?>
