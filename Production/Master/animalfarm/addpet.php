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

<!DOCTYPE html>
<html>
<head>
	<title>Add Pet</title>
	<meta charset="utf-8">
</head>
<body>
	<?php
	if (isset($_POST['send'])) {
		$conn = conn();
		$pet_name = $_POST['pet_name'];
		$pet_caption = $_POST['pet_caption'];
		$sql = "INSERT INTO pet (pet_name,pet_caption) VALUES ('$pet_name', '$pet_caption')";
		$conn->query($sql);
		echo "ได้รับข้อมูลแล้ว";
	} 

	// UPDATE pet SET pet_video = "http://youtube.com/___" WHERE pet_id = 1;
	?>

	<form method="POST">
		<input type="text" name="pet_name" placeholder="Pet's Name">
		<input type="text" name="pet_caption" placeholder="Pet's Caption">
		<button name="send">Submit</button>
	</form>

</body>
</html>
