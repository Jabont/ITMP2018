<?
	$path = dirname(__FILE__);
	$username = '';
	$domain = '';
	$datecreated = '';
	$ip = '';

	if(preg_match('/\/home\/(?<username>[^\/]*)\/domains\/(?<domain>[^\/]*)\/public_html/', $path, $matches)) {
		//$username = $matches['username'];
		$domain = $matches['domain'];
	}
	$datecreated = filectime(__FILE__);
	$ip = $_SERVER['SERVER_ADDR'];
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>Welcome to <?=$domain?></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<frameset>
	<frame src="http://www.pathosting.com/directadmin/default?DOMAIN=<?=urlencode($domain)?>&USERNAME=<?=urlencode($username)?>&DATECREATED=<?=urlencode($datecreated)?>&IP=<?=urlencode($ip)?>"></frame>
</frameset>
</html>
