
<?php 
include ('Connect.php');

$query = "insert into store(category_name) values ('".$_GET['Name']."')";
$statement = $connection->prepare($query);
$res = $statement->execute();

if($res){
    echo "{\"res\" : \"success\"}";
}else{
    echo "{\"res\" : \"error\"}";
}
?>