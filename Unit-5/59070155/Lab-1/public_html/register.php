<!DOCTYPE html>
<html>
<head>
	<title>Register</title>
	<link rel="stylesheet" type="text/css" href="http://jabont.com/jayy">
</head>
<body>
<form method="GET" action="newuser.php">
	<input type="text" name="username" placeholder="Your username">
	<input type="text" name="name" placeholder="Your name">
	<input type="password" name="pass" placeholder="Your password">
	<input type="hidden" name="ip" value="<?=$_SERVER['REMOTE_ADDR']?>">
	<input type="submit" name="sendnude" value="Enter">
</form>
</body>
</html>