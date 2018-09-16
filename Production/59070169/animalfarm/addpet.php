<?php
	function conn(){
		$servername = "localhost";
		$username = "zp10953_farm";
		$password = "XJmkaT5sdeyHbhUh";
		$dbname = "zp10953_farm";
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
	<link rel="stylesheet" type="text/css" href="https://jabont.com/jayss/jayss.css">
	<link rel="stylesheet" type="text/css" href="https://jabont.com/jayss/jayss-custom.php?ggfont=Dosis&font=3E2723&bg=FFECB3&cl=de791a,ea5a6f,AB47BC">
	<link href="https://fonts.googleapis.com/css?family=Dosis:800" rel="stylesheet">
</head>
<body class="t-center padding-xl">
		<style type="text/css">
			body{
			font-family: 'Dosis', sans-serif;
			background-image: linear-gradient(to left ,#ffafbd,#ffc3a0);
			}
			div{
				width: 300px;
				height: 280px;
				border: 2.5px solid black;
			}
			input[type=text]{
				background-color: #FFF8DC;
				border: 1px solid black;
				border-radius: 4px;
			}
			button{
			  padding: 8px 16px;
			  font-size: 14px;
			  text-align: center;
			  color: #fff;
			  background-color: #FF7F50;
			  border: 1px solid black;
			  
			}
			button:hover {background-color: #FF6347}		
		</style>


	<?php
	if (isset($_POST['send'])) {
		$conn = conn();
		$pet_name = $_POST['pet_name'];
		$pet_caption = $_POST['pet_caption'];
		$sql = "INSERT INTO pet (pet_name,pet_caption) VALUES ('$pet_name', '$pet_caption')";
		$conn->query($sql);
	 	echo "ได้รับข้อมูลแล้ว";
	 } 
	 ?>

	<center><div class="bg-white round padding-l t-center"id="shadow">
		<form method="POST">
			<h2>Pet's name: </h2>
			<input type="text" name="pet_name" placeholder="Pet's name">
			<h2>Pet's caption: </h2>
			<input type="text" name="pet_caption" placeholder="Pet's caption">
			<br><br><button name="send" class="round">Submit</button>
		</form>
	</div></center>
	
</body>
</html>
