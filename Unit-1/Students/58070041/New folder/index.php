<!DOCTYPE html>
<html>
<head>
	<title>from</title>
	<link rel="stylesheet" type="text/css" href="css.css">
</head>
<body>
	<?php
	function conn(){
		$conn = new mysqli($localhost, $username, $password, $dbname);
		return $conn;
		echo "finish";
	}
	?>


	<form method="POST">
		<input type="text" name="uname" placeholder="name">
		<select>
			<option value="-1">gender</option>
			<option value="male">male</option>
			<option value="female">female</option>
		</select>
		<button>Go</button>
	</form>
	<div class="male">
		<p>name : bank</p>
		<p>gender : male</p>
		<img src="male.png">
		<button value="delete">Delete</button>
	</div>

	<style type="text/css" src="js.js"></style>
</body>
</html>