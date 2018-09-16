<?php
function conn(){
	$servername = "localhost";
	$username = "zp10959_farm";
	$password = "siK6PHmUfmBFDM5J";
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
		$pet_link = $_POST['pet_link'];
		$sql = "INSERT INTO pet (pet_name,pet_caption,pet_link) VALUES ('$pet_name', '$pet_caption','$pet_link')";
		$conn->query($sql);
		echo "ได้รับข้อมูลแล้ว";
	} 
	?>

	<form method="POST">
		<input type="text" name="pet_name" placeholder="Pet's Name">
		<input type="text" name="pet_caption" placeholder="Pet's Caption">
		<input type="text" name="pet_link" placeholder="Pet's Video">
		<button name="send">Submit</button>
	</form>


	<div><br><br>
	<table border="1px">
		<tr>
			<th>Pet's ID</th>
			<th>Pet's Name</th>
			<th>Pet's Caption</th>
			<th>Pet's Video</th>
			<?php
				$conn = conn();  
				$sql = "SELECT * FROM pet";
				$result = $conn->query($sql);
				if ($result->num_rows > 0) {
    				while($row = $result->fetch_assoc()) {
    					?>
    					<tr>
        					<td><?=$row["pet_id"]?></td>
        					<td><?=$row["pet_name"]?></td>
        					<td><?=$row["pet_caption"]?></td>
        					<td><?=$row["pet_link"]?></td>
        				</tr>
    				<?php
    				}
				} else {
    				echo "0 results";
				}
			?>
	</table>
	</div>

</body>
</html>
