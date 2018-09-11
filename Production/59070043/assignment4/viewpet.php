<!DOCTYPE html>
<?php 
	if(!isset($_POST['username'])){
		header('Location: index.php');
		exit();
	}
	$username = $_POST['username'];
?>
<html>
<head>
	<title>View Pet</title>
</head>
<body>
	<iframe width="1350" height="600" src="<?php echo $username ?>"></iframe>
</body>
</html>