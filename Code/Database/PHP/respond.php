<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "INSERT INTO TicketResponse (Description, UsernamePortal, TicketID)
VALUES ('$data->Description', '$data->UsernamePortal', '$data->TicketID')";

$sql2 = "UPDATE Ticket SET NumberofResponses = NumberofResponses+1 , Status = '$data->Status' WHERE TicketID='$data->TicketID'";

if($data->Description){
	$qry = $mysqli->query($sql);
    $qry2 = $mysqli->query($sql2);
}
$mysqli->close();
?>