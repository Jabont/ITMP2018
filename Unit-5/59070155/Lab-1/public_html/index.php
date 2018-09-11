<html>
<head>
	<title>
		it59070155.it
	</title>

	<style>
	* { font-family: verdana; font-size: 10pt; COLOR: gray; }
	b { font-weight: bold; }
	table { height: 50%; border: 1px solid gray;}
	td { text-align: center; padding: 25;}

	</style>
</head>
<body>
<?php
$car = array('bmw','toyota','honda');
print_r($car);
?>
<hr>
<?php
echo "product";
$product = $_GET;
print_r($product);
?>
<hr>
<h1>Product ID: <?=$product["id"]?></h1>
<h2>Product Name: <?=$product["pname"]?></h2>
</body>

</html>
