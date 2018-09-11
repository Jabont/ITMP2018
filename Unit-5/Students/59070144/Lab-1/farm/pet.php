<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="http://jabont.com/jayss/jayss.css">
</head>
<body>
	<theboxes boxing="3" class="spacing -gap">
		<?php
		function conn() {
			$servername = "localhost";
			$username = "it59070144_farm";
			$password = "TY0n6ghjH";
			$dbname = "it59070144_farm";
			$conn = new mysqli($servername ,$username, $password, $dbname);

			// Check connection
			if ($conn->connect_error) {
			    die("Connection failed: " . $conn->connect_error);
				} 
			else {
				return $conn;
			}
		} ?>

		<?php
		$conn = conn();
		$sql = "SELECT * FROM pet";
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
		    while($row = $result->fetch_assoc()) {
		?>

		        <box id="apet_">
		        	<inner class="bg-white round shadow cl-green padding t-center">
		        		<img src="___.jpg" class="wide">
		        		<h1>น้องหมาจ้าาาาาา</h1>
		        		<p>หน้า_ีชิปหายอีด_กกกกกกก</p>
		        	</inner>
		        </box>
		
		<?php
		    }
		} else {
		    echo "0 results";
		}
		$conn->close();
		?>
	</theboxes>
</body>
</html>