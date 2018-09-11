<html>
<head>
    <title>
        it59070144.it
    </title>

    <style>
    * { font-family: verdana; font-size: 10pt; COLOR: gray; }
    b { font-weight: bold; }
    table { height: 50%; border: 1px solid gray;}
    td { text-align: center; padding: 25;}
    </style>

</head>
<body>
    Hello<br>
    <?php
    $username = "The Buddy G's";
    $nickname = "Sgotth";
    echo 'Name : <b>'.$username.'</b><br>';
    echo 'Nickname : <b>'.$nickname.'</b>';
    ?>

    <hr>
    <?php
    echo 'car';
    $car = array('bmw', 'toyota', 'honda');
    $car['my'] = 'taxi taxi taxi';
    print_r($car);
    ?>

    <hr>
    <?php
    echo 'product';
    $product = $_GET;
    print_r($product)
    ?>

    <hr>
    <h1>Product ID : <?=$product['id']?> </h1>
    <h2>Product Name : <?=$product['p_name']?> </h2>
</body>

</html>
