<?php
function conn(){
	$servername = "localhost";
	$username = "zp10966_pet";
	$password = "y1KhInysiJLn4T";
	$dbname = "zp10966_pet";
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
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="http://jabont.com/jayss/jayss.css">
</head>
<body class="bg-yellow">
	<?php
	if (isset($_POST['send'])) {
		$conn = conn();
		$sql = "INSERT INTO pet (pet_name, pet_caption, pet_video) VALUES ('$pet_name', '$pet_caption', '$pet_video')";
		$conn->query($sql);
		echo "ได้รับข้อมูลแล้ว";
	} 
	?>
	<h1>Page for add pet</h1> <br>
	
	<form method="POST">
		<input type="text" name="pet_name" placeholder="Pet's Name">
		<input type="text" name="pet_caption" placeholder="Pet's Caption">
		<input type="text" name="pet_video" placeholder="pet_video">
		<button name="send">Submit</button>
	</form>

</body>
</html>
