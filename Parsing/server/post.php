<?php
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
 $products = file_get_contents('php://input');
if (isset($products))
{
	echo "Даннsе получены!";
	file_put_contents('products-men.json', $products);
	echo "Данные записаны!";
}
else
{  
    echo "веденные данные некорректны";
}
?>   