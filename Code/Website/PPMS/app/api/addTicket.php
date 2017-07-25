<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "INSERT INTO Ticket (Description, UsernamePortal)
VALUES ('$data->Description', '$data->UsernamePortal')";

if($data->Description){
	$qry = $mysqli->query($sql);
}
$mysqli->close();
?>