<?php
	function conn(){
		$servername = "localhost";
		$username = "zp10965";
		$password = "AGLe-324dm";
		$dbname = "zp10965_test";
		$conn = new mysqli($servername, $username, $password, $dbname);

		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 
		else{
			return $conn;
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Add Pet</title>
	<meta charset="utf-8">
</head>
<body>
	<?php
	$pet_name = $_POST['pet_name'];
	$pet_caption = $_POST['pet_caption'];
	if (isset($_POST['send'])) {
		$conn = conn();
		$sql = "INSERT INTO pet (pet_name,pet_caption)
			    values ('$pet_name','$pet_caption')";
		$conn->query($sql);
	 	echo "ได้รับข้อมูลแล้ว";
	 } 
	 ?>

	<form method="POST">
		<input type="text" name="pet_name" placeholder="Pet's Name">
		<input type="text" name="pet_caption" placeholder="Pet's Caption">
		<button name="send">Submit</button>
	</form>

</body>
</html>
