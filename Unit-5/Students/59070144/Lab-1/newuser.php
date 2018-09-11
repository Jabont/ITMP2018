<!DOCTYPE html>
<html>
<head>
	<title>New User</title>
	<link href="https://fonts.googleapis.com/css?family=Itim|Kanit|Quicksand" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="http://jabont.com/jayss/jayss.css">
	<style>
    * { font-family: 'Quicksand', sans-serif; font-size: 15pt; COLOR: white; }
    b { font-weight: bold; }
    table { height: 50%; border: 1px solid gray;}
    td { text-align: center; padding: 25;}
    </style>
</head>
<body class="bg-yellow">
	<?php
	$data = $_GET;
	?>
	<section class="cont-pd padding">
		<div class="padding bg-black round t-center">
			<h1 class="cl-red">Hello, <?=$data['firstname']?> <?=$data['surname']?>!! Welcome to my site.</h1>
			<h2>Your username is <?=$data['username']?></h2>
		</div>
	</section>
</body>
</html>