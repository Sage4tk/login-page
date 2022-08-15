<?php
    //import models
    include("./models/user.php");

    //parse incoming json
    $req = json_decode(file_get_contents("php://input"), true);

    //get model
    $res = new UserClass($req['user'], $req['password']);

    //register user in db if post request
    if($_SERVER['REQUEST_METHOD'] === "POST") {
        echo json_encode($res->createUser());
    }

    //get user from db
    if ($_SERVER['REQUEST_METHOD'] === "GET") {
        echo json_encode($res->findUser());
    }
?>