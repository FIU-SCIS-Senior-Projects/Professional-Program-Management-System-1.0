<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

		$code = $data->code;
		// Make sure user email with matching hash exists.
        $sql = "SELECT * FROM User WHERE Hash = '$code' ";
		$result = $mysqli->query ($sql);
        

        if ($result->num_rows == 0)
		{
			echo "Verification failed";
		}
        else{
            $Password = MD5($data->newPassword);
            $newHash = md5(uniqid(rand(), true));
            $sql2 = "UPDATE User SET Password = '$Password', Hash='$newHash' WHERE Hash = '$code'";

            $qry = $mysqli->query($sql2);
            if (!$qry) {
                echo "0";

            } else {
                echo json_encode($data);
            }
        }
    
$mysqli->close();
?>
