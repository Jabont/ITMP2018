<!DOCTYPE html>
<html>
<head>
	<title>PET</title>
</head>
<body>
	<?php
		function conn(){
			$servername = "localhost";
			$username = "it59070155_farm";
			$password = "watRMKEoy";
			$dbname = "it59070155_farm";
			// Create connection
			$conn = new mysqli($servername, $username, $password);

			// Check connection
			if ($conn->connect_error) {
			    die("Connection failed: " . $conn->connect_error);
			}
			else{
				return $conn;
			}
			// echo "Connected successfully";
		}
	?>



<div class="cont-pd">
	<theboxes boxing="3" class"spacing -gap">
	<?php
		$conn = conn();
		$sql = "SELECT * FROM 'pet'";
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
		    // output data of each row
		    while($row = $result->fetch_assoc()) {
		    	?>
		    	<box>
		    		<inner class="bg-white rond shadow cl-green paddinf t-center">
			    		<img src="___.jpg" class="wide">
			    		<h1>___</h1>
			    		<p>___</p>
			    	</inner>
			    </box>
		    	<?php
		    }
		} else {
		    echo "0 results";
		}
		// $conn->close();
		?>
		</theboxes>
	</div>
	?>
</body>
</html>