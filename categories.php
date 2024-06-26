<?php
include('dbconnection.php');

try {
    $query = "select * from category_table";
    $statement = $conn->prepare($query);
    $statement->execute();
    $result = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Send JSON response
    header('Content-Type: application/json');
    echo json_encode($result);
} catch (PDOException $th) {
    header('Content-Type: application/json');
    echo json_encode(['Error' => $th->getMessage()]);
}