<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
if(isset($_GET['number']))
{
    $num = $_GET['number'];
    $result=1;
    for($i=1; $i<=$num; $i++){
         
        $result *= $i;
    }
    echo $result;
}
else
{  
    echo "¬веденные данные некорректны";
}
?>