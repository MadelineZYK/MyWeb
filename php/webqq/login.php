<?php 
	$info=isset($_GET["error"])?$_GET["error"]:"";
	if($info=="wrongpwd"){
		$js='alert("fail to login! try it again!")';
		echo "<script>".$js."</script>";
	}
 ?>
<html>
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="css/login.css">
</head>
<body>
	<div id="logincontainer">
		<h1 class="formh1">
			<strong>Welcome to WebQQ</strong>
		</h1>
		<div class="kuang">
			<div class="blocktitle">
				<div class="blockoptions"></div>
				<h2>Please Login</h2>
			</div>
			<form id="formlogin" action="index.php" method="POST">
				<div class="formgroup">
					<div class="col">
						<input name="userid" type="text" id="txtUserid" class="formcontrol" placeholder="Your userid..">
					</div>
				</div>
				<div class="formgroup">
					<div class="col">
						<input name="userpwd" type="password" id="txtUserPwd" class="formcontrol" placeholder="Your password..">
					</div>
				</div>
				<div class="formgroup formactions">
					<div class="col8">
						<label class="csscheckbox">
							<input type="checkbox" id="rememberme">
							<span></span>
						</label>
						Remember Me?
					</div>
					<div class="col4">
						<button type="submit" value="Let's Go" class="btn">
					</div>
					
				</div>
				
			</form>
		</div>
	</div>
</body>
</html>