<?php
	$data = json_decode(file_get_contents("php://input"));
	include "db.php";
    $password = MD5($data->password);
    $username = $data->username;

	$sql = "SELECT * FROM User WHERE Username='$username' AND Password='$password'";
	$result = $mysqli->query($sql);
	if ($result->num_rows == 1) {
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

