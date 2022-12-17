<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

if (isset($_POST["mydata"]) && isset($_FILES["mydata1"])) {
    $data = json_decode($_POST["mydata"]);
    $username =  $data->username;
    $name =  $data->name;

    $file = $_FILES["mydata1"];
    print_r($file);
    $photo_name = $file['name'];
    $photo_temp_name = $file['tmp_name'];
    $photo_size = $file['size'];
    $error = $file['error'];

    $url = "uploads/";

    move_uploaded_file($photo_temp_name, $url . $photo_name);
    echo json_encode("Successfully Uploaded");
} else {

    echo json_encode("First select file and enter data");
}
