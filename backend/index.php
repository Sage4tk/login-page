<?php

    $testObj = array("status" => 200, "Message" => "Everything good!");

    //cors
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");
    
    echo json_encode($testObj)
?>