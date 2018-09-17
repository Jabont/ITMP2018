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

	$menu = ['BBQ','Sandwich','Pizza','Burger','Noodle'];
	$price = [];
	$price['BBQ'] = 30;
	$price['Sandwich'] = 15;
	$price['Pizza'] = 50;
	$price['Burger'] = 40;
	$price['Noodle'] = 35;
	?>

	<form method="POST">
		<select name="order_name">
			<?php
			for ($i=0; $i < sizeof($menu); $i++) { 
				?>
				<option value="<?=$menu[$i]?>"><?=$menu[$i]?></option>
				<?php
			} 
			?>
		</select>
		<input	type="text" name="order_number" placeholder="Number">
		<input	type="text" name="order_price" placeholder="Price">
		<input	type="text" name="c_name" placeholder="Customer's Name">
		<button name="send" value="send_order">Order Now!</button>
		
	</form>

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