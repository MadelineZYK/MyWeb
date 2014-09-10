<?php 
	header("Content-Type:text/html; charset=utf8"); 
	include 'conn/db.class.php';

	$cc=new DB();
	$res = $cc -> get_all("select * from user");

	while(list($key,$value)=each($res)){
		echo $value["userID"];
		echo $value["password"];
	}	
 ?>
<html>
<head>
	<title>PHP测试</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
	<div id="header">头部</div>
	<div id="main">
		<?php 
		include "yyphp/main.php";
		 ?>
	</div>
	<div id="bottom">底部</div>
</body>
</html>