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
		$pet_video = $_POST['pet_video'];
		$sql = "INSERT INTO pet (pet_name,pet_caption,pet_video)
		VALUES ('$pet_name','$pet_caption','$pet_video')";
		$conn->query($sql);
	 	echo "ได้รับข้อมูลแล้ว";
	 }
	 ?>

	<form method="POST">
		<input type="text" name="pet_name" placeholder="Pet's Name">
		<input type="text" name="pet_caption" placeholder="Pet's Caption">
		<input type="text" name="pet_video" placeholder="Pet's Video">
		<button name="send">Submit</button>
	</form>

	<div><br><br>
	<table border="1px">
		<tr>
			<th>Pet's ID</th>
			<th>Pet's Name</th>
			<th>Pet's Caption</th>
			<th>Pet's Video</th>
		</tr>
		<tr>
			<?php
				$conn = conn();  
				$sql = "SELECT * FROM pet";
				$result = $conn->query($sql);
				if ($result->num_rows > 0) {
    				// output data of each row
    				while($row = $result->fetch_assoc()) {
    					?>
        				<td><?=$row["pet_id"]?></td>
        				<td><?=$row["pet_name"]?></td>
        				<td><?=$row["pet_caption"]?></td>
        				<td><?=$row["pet_video"]?></td>
    				<?php
    				}
				} else {
    				echo "0 results";
				}
			?>
		</tr>
	</table>
	</div>

</body>
</html>
