<!DOCTYPE html>
<html>
<head>
	<title>New User</title>
	<link rel="stylesheet" type="text/css" href="http://jabont.com/jayss/jayss.css">
</head>
<body>
<?php
$data=$_GET;
?>
<section class="cont-pd padding">
	<div>
		<h1 class="cl-red">hi <?=$data['name']?></h1>
		<h2>Your username is <?=$data['username']?></h2>
	</div>
</section>
</body>
</html>