<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

if(isset($_GET['number'])) { 
	$num = $_GET['number']; 
	echo $num;
} else {
	echo "¬веденные данные некорректны";
}


?>