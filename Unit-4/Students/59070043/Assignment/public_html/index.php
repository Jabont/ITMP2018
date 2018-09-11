<html>
<head>
	<title>
		it59070043.it
	</title>

	<style>
	* { font-family: verdana; font-size: 10pt; COLOR: gray; }
	b { font-weight: bold; }
	table { height: 50%; border: 1px solid gray;}
	td { text-align: center; padding: 25;}

	</style>
</head>
<body>
Hello 
<?php
$thename = 'Tiger';
$thesur = 'Wrr';
echo 'Name: <b>' .$thename. '</b>';
echo '<br>Surname: <b>$thesur</b>';
echo "<br>Surname: <b>$thesur</b>";
?>
<hr>
<?php
$car = array('car','cart','kiss');
$car['my'] = 'Taxi'; 
print_r($car);
?>
<hr>
<?php
echo "product<br>";
$product = $_GET;
print_r($product);
?>
<hr>
<h1>Product ID: <?=$product['id']?></h1>
<h1>Product Name: <?=$product['pname']?></h1>
</body>

</html>
