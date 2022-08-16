<?php
    //import models
    include("./models/user.php");

    //parse incoming json
    $req = json_decode(file_get_contents("php://input"), true);

    //get model
    $res = new UserClass($req['user'], $req['password']);

    //cors
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

    //register user in db if post request
    if($_SERVER['REQUEST_METHOD'] === "POST") {
        echo json_encode($res->createUser());
    }
?>