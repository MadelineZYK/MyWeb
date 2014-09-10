<?php 
	include_once "include/ez_sql_core.php";
	include_once "include/ez_sql_mysql.php";
	
	$userid=isset($_POST["userid"])?$_POST["userid"]:"";
	$userpwd=isset($_POST["userpwd"])?$_POST["userpwd"]:"";
	if($userid!=""&&$userpwd!=""){
		$db=new ezSQL_mysql();
		$res=$db->get_row("select * from userinfo where id='".$userid."'and userpwd=".$userpwd."");
		if(!$res){
			header("location:login.php?error=wrongpwd");
			die();
		}else{
			//将当前成功登录的人的信息写入session中
			$_SESSION["wodeid"]=$userid;
			$_SESSION["wodenicheng"]=$res->userNickName;
			//echo "success to login!welcome ".$res->userNickName;
		}
	}

	$curid=isset($_SESSION["wodeid"])?$_SESSION["wodeid"]:"";
	$curnicheng=isset($_SESSION["wodenicheng"])?$_SESSION["wodenicheng"]:"";
	if($curid==""){
		header("location:login.php?error=needlogin");
		die();
	}else{
		echo "welcom  ".$curnicheng;
	}
 ?>
<html>
<head>
	<title>Web Chat</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
	<div id="list">
		<div class="title">联系人</div>
		<div class="friendslist">
			<?php 
				$res1=$db->get_results("select * from friendsinfo where userid=".$curid."");
				while(list($key,$value)=each($res1)){
					echo $value["friendid"];
					echo $value["friendNoteName"];
				}	
		 	?>
		</div>		
	</div>
</body>
</html>