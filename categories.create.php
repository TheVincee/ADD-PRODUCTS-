<?php
include('dbconnect.php');

$query = "insert into table_samp(category_name)
values ('".$_GET["name"]."')";
$statement = $connection->prepare($query);
$res = $statement->execute();

if($res){
    echo"{\"res\" : \"success\"}";
}
else{
    echo"{\"res\" : \"error\"}";
}

?>