<?php
if(!isset($_GET['term']) || !isset($_GET['coda']) || !isset($_GET['def']))
    header('Location:../');

$term = addslashes($_GET['term']);
$def = addslashes($_GET['def']);
$coda = $_GET['coda'];
include "../../dbconfig/dbopen.php";
$sql="INSERT INTO $ter (coda,termine,definizione) VALUES ('$coda','$term','$def')";
if (!$dbconn->query($sql))
{
    include "../../dbconfig/dbclose.php";
    die("Impossibile inserire il termine");
}
include "../../dbconfig/dbclose.php";
?>