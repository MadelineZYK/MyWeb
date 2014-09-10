<?php 
	header("Content-Type:text/html; charset=utf8"); 
	include 'conn/db.class.php';

	$cc=new DB();
 ?>
<html>
<head>
	<title>Web Chat</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="css/webchat.css">
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/webchat.js"></script>
</head>
<body>
	<div id="btn">Info</div>

	<div id="add">
		<div class="userinfo">
			<div class="username">zxc</div>
			<div class="userpwd">123</div>
		</div>
		<div class="addbtn">Add</div>
	</div>
</body>
</html>