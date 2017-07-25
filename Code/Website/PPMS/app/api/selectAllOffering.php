<?php
include "db.php";
$sql = "SELECT Offering.TermID, PantherCourseNumber, Schedule, Course.CourseNumber, StartDate, EndDate, CourseName 
        FROM Offering, Term, Course 
        WHERE Offering.TermID=Term.TermID AND Offering.CourseNumber=Course.CourseNumber;";

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