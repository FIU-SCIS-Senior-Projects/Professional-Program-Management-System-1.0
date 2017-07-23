<?php
// Used to connect to the database. 
// Plase be advised to use your own credentials. This is a temporary server only for use during Summer 2017
error_reporting(E_ALL);
ini_set('display_errors', 'On');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$host = '127.0.0.1'; 
$user = "jcasa";
$pass = "sp2017.d@t@fiu";
$db = "SeniorProject2017";
$mysqli = mysqli_connect($host, $user, $pass, $db);
if (mysqli_connect_errno())
{
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit;
}?>

