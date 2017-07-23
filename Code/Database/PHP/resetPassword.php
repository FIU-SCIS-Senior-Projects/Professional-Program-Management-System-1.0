<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$email = $data->email;

$sql  = "SELECT * FROM User WHERE Email='$email'";
$result = $mysqli->query($sql);

if (mysqli_num_rows($result) == 1)
		{
			$user = $result->fetch_assoc();
			$name = $user['FirstName'];
			$hash = $user['Hash'];
			$to = $email;
			$subject = "Password Reset | PPMS";
			$headers = "From: admin@SeniorProject2017.com";
			
			$body = '
			Hello, ' . $name. ',
			
			You have requested a password reset through the Professional Program Management System webpage.

			This is your unique code: '. $hash .'

			Please click this link to reset your password:
			
			http://localhost:3000/reset';
			
			$mail = mail($to, $subject, $body, $headers);
            echo json_encode($mail);
		}
else{   
        echo json_encode("0");
}

$mysqli->close();
?>