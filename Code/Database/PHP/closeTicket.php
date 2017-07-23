<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$TicketID = $data->TicketID;

$sql = "UPDATE Ticket SET Status = 'Closed' WHERE TicketID ='$TicketID'";
$result = $mysqli->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0";
}
$mysqli->close();
?>

