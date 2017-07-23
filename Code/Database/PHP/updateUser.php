<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE User SET
Username ='$data->username',  FirstName ='$data->firstName',
LastName ='$data->lastName', MiddleInitial = '$data->middleInitial',Gender ='$data->gender',
Password ='$data->password',Email ='$data->email',
Phone ='$data->phone',StreetAddress ='$data->street1',
Apt_Building ='$data->street2',City ='$data->city',
State ='$data->state',ZipCode ='$data->zip',
Country ='$data->country',UserType ='student',   
WHERE username = $data->username ";
$qry = $conn->query($sql);
if($data->username){
}
$conn->close();
?>
