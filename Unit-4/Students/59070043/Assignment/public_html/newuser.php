<!DOCTYPE html>
<html>
<head>
	<title>New User</title>
	<link rel="stylesheet" type="text/css" href="http://jabont.com/jayss/jayss.css">
</head>
<body class="bg-black">
<?php
$data = $_GET; 
?>
 <section class="cont-pd padding">
 <div class="padding bg-white round t-center">
 <img src="pet/<?=$data['username']?>.jpg">
 	<h1 class="cl-red">Hi! <?=$data['name']?></h1>
	<h3>your username is <?=$data['username']?></h3>
	</div>
 </section>

</body>
</html>