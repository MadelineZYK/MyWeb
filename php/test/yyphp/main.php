<?php 
	header("Content-Type:text/html; charset=utf8"); 

	 $resu = $cc -> insert_id();
	 echo $resu;
	// while(list($key,$value)=each($resu)){
	// 	echo $value["userID"];
	// 	echo "\r\n";
	// 	echo $value["password"];
	// 	echo "&nbsp;&nbsp;";
	// }
 ?>