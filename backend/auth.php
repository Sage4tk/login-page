<?php

    $data = json_decode(file_get_contents("php://input"), true);

    //register user in db if post request
    if($_SERVER['REQUEST_METHOD'] === "POST") {
        echo $data['password'];
    }

    //get user from db
    if ($_SERVER['REQUEST_METHOD'] === "GET") {
        echo json_encode($_GET);
    }
?>