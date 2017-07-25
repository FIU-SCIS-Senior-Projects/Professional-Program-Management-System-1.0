<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$data->middleInitial = !empty($data->middleInitial) ? "'$data->middleInitial'": "NULL";
$data->street2= !empty($data->street2) ? "'$data->street2'" : "NULL";
$hash = md5(uniqid(rand(), true));

$sql = "INSERT INTO User (Username, FirstName, MiddleInitial, 
					 LastName, Gender, Password, Email, Phone, StreetAddress, Apt_Building, 
					 City, State, ZipCode, Country, UserType, Hash)
VALUES ('$data->username', '$data->firstName', $data->middleInitial, '$data->lastName', '$data->gender'
		, MD5('$data->password'), '$data->email', '$data->phone', '$data->street1', $data->street2, 
		'$data->city', '$data->state', '$data->zip', '$data->country', 'Guest', '$hash')";

$sql1 = "SELECT Username, Email FROM User WHERE Username='$data->username' OR Email='$data->email'";
if($data->username)
{
	$result= $mysqli->query($sql1);
	if($result->num_rows > 0){
		echo "duplicate username or password";
	}
	else{
		$qry = $mysqli->query($sql);
	}
}	

$mysqli->close();
?>