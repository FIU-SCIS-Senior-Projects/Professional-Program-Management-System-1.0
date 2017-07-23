<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "INSERT INTO Offering (PantherCourseNumber, Section, Classroom, Schedule, EnrollmentCap, InstructorID, TermID, CourseNumber)
        VALUES ('$data->PantherCourseNumber','$data->Section','$data->Classroom','$data->Schedule',
        '$data->EnrollmentCap','$data->InstructorID','$data->TermID','$data->CourseNumber')";

$sql1= "INSERT INTO Course (CourseNumber, CourseName, Credits)
        VALUES ('$data->CourseNumber','$data->CourseName','$data->Credits')";

$sql2= "INSERT INTO Term (TermID, TermName, StartDate, EndDate)
        VALUES ('$data->TermID','$data->TermName','$data->StartDate','$data->EndDate')";

if($data->PantherCourseNumber){
    
        $qry = $mysqli->query($sql1);
        $qry1 = $mysqli->query($sql2);
	$qry2 = $mysqli->query($sql);
}
$mysqli->close();
?>
