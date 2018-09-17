<!DOCTYPE html>
<html>
<head>
	<title>P'Fon Order</title>
	<meta charset="UTF-8">
	<style type="text/css">
	.orderlist {
		background: yellow;
		width: 300px;
		display: inline-block;
		padding: 1em;
	}
	</style>
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
	$menu = ['BBQ', 'Sandwitch', 'Pizza', 'Burger', 'Noodle'];
	$price = [];
	$price['BBQ'] = 30;
	$price['Sandwitch'] = 40;
	$price['Pizza'] = 50;
	$price['Burger'] = 60;
	$price['Noodle'] = 70;
	if (isset($_POST) AND $_POST['send'] == 'send_order') {
		$order_name = $_POST['order_name'];
		$order_number = $_POST['order_number'];
		$c_name = $_POST['c_name'];

		$order_price = $price[$order_name];
		$order_total = $order_price*$order_number;
	}

	//sert
	$conn = conn();
	$sql = "INSERT INTO orders (
			order_name ,
			order_number ,
			order_price ,
			order_total ,
			c_name
			) VALUES (
 '$order_name', '$order_number', '$order_price', '$order_total', '$c_name'
)";
	$conn->query($sql);

	if ($_POST['send'] == 'send_update') {
		$order_number = $_POST['order_number'];
		$order_id = $_POST[''];
		$conn = conn();
		$sql = "UPDATE orders SET order_number = $order_number WHERE order_id = $order_id";
		$conn->query($sql);
	}

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
	<select name="order_number">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
	</select>
		<input type="text" name="c_name" placeholder="c">
		<button name="send" value="send_order">Order_now</button>
	</form>

	<?php
	$conn = conn();
	$sql = "SELECT * FROM orders";
	$result = $conn->query($sql);
	while($row = $result->fetch_assoc()) {
		?>
		<div class="order_list">
			<h2><?=$row['order_id']?> : <?=$row['order_name']?></h2>
			<h1><?=$row['order_id']?></h1>
			<p>
				Price : <?=$row['order_price']?> x <?=$row['order_total']?>
				Total : <?=$row['order_total']?> baths
			</p>
			<hr>
			<form method="POST">
				<select name="order_number">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<input type="text" name="c_name" placeholder="">
					<button name="send" value="send_update">update</button>
			</form>
		</div>
		<?php
	}
	
	?>

</body>
</html>