<!DOCTYPE html>
<html>
<head>
	<title>P'Fon Order</title>
	<meta charset="UTF-8">
</head>
<body>
	<?php
	function conn(){
		// $servername = "localhost";
		// $username = "root";
		// $password = "";
		// $dbname = "pfon";
		// $conn = new mysqli($servername, $username, $password, $dbname);
		$conn = new mysqli("localhost", "root","", "pfon");
		return $conn;
	}

	$menu = ['BBQ','Sandwich','Pizza','Burger','Noodle'];
	$price = [];
	$price['BBQ'] = 30;
	$price['Sandwich'] = 15;
	$price['Pizza'] = 50;
	$price['Burger'] = 40;
	$price['Noodle'] = 35;
	if (isset($_POST) AND $_POST['send'] == 'send_order') {
		//Prepare data
		$order_name = $_POST['order_name'];
		$order_number = $_POST['order_number'];
		$c_name = $_POST['c_name'];

		$order_price = $price[$order_name];
		$order_total = $order_price*$order_number;

		//Insert Order
		$conn = conn();
		$sql = "INSERT INTO orders (
			order_name ,
			order_number,
			order_price ,
			order_total ,
			c_name)
		VALUES ( '$order_name',  
			'$order_number',  
			'$order_price',  
			'$order_total',  
			'$c_name' )";
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
		<input	type="text" name="c_name" placeholder="Customer's Name" required value="Jabont">
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