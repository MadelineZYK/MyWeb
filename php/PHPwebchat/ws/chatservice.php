<?php 
	$flag=isset($_POST["flag"])?$_POST["flag"]:"";
	$name=isset($_POST["name"])?$_POST["name"]:"";
	if($flag==""){
		die();
	}
	if($flag=="test" && $name!=""){
		echo "Hello  " . $name;
		die();
	}
 ?>