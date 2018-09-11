<!DOCTYPE html>
<?php
	if (isset($_POST['username'])){
		$var = $_POST['username'];
		$url = "viewpet.php?username=" . $username;
		header('Location: ' . $url);
		exit();
	}
?>
<html>
<head>
	<title>PETs</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="http://jabont.com/jayss/jayss.css">
</head>
<body class="bg-green">


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



	<div class="cont-pd">
		<theboxes boxing="3" class="spacing -gap rack capital">
			<?php
			$conn = conn();
			$sql = "SELECT * FROM pet";
			$result = $conn->query($sql);
			session_start();

			if ($result->num_rows > 0) {

				while($row = $result->fetch_assoc()) {
					?>
					<box id="apet_<?=$row['pet_id']?>">
						<inner class="bg-white round shadow cl-green padding t-center">
							<img src="./pet/<?=$row['pet_name']?>.jpg" class="wide round">
							<sp></sp>
							<h1><?=$row['pet_name']?></h1>
							<p><?=$row['pet_caption']?></p>
							<form method="post" action="viewpet.php">
								<button name="username" value="<?=$row['pet_link']?>"> มาเล่นกันเถอะๆ</button>
							</form>
						</inner>
					</box>
					<?php
				}
			} else {
				echo "0 results";
			}
			?>
		</theboxes>

		
	</div>
</body>
</html>
