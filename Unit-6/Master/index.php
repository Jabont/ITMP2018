<!DOCTYPE html>
<html>
<head>
	<title>P'Fon Order</title>
	<meta charset="UTF-8">
</head>
<body>
	<?php
	function conn(){
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "pfon";
		$conn = new mysqli($servername, $username, $password, $dbname);

		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 
		else{
			return $conn;
		}
	}
	?>
	<?php
	$conn = conn();
	$sql = "SELECT * FROM orders";
	$result = $conn->query($sql);
	while($row = $result->fetch_assoc()) {
		print_r($row);
	}
	
	?>

</body>
</html>