<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$PantherCourseNumber = $data->PantherCourseNumber;

$sql = "SELECT StudentID, FIUusername, FirstName, LastName, PantherID, PantherCourseNumber
        FROM Student, Registration, User
        WHERE PantherID = StudentID AND User.Username = Student.Username AND PantherCourseNumber='$PantherCourseNumber';";

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