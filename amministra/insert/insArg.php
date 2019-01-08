<?php
if(!isset($_GET['arg']) || !isset($_GET['codm']))
    header('Location:../');

$argomento = addslashes($_GET['arg']);
$codm = $_GET['codm'];
include "../../dbconfig/dbopen.php";
$sql="INSERT INTO $arg (argomento,codm) VALUES ('$argomento','$codm')";
if (!$dbconn->query($sql))
{
    include "../../dbconfig/dbclose.php";
    die("Impossibile inserire l'argomento");
}
include "../../dbconfig/dbclose.php";
?>