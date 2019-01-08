<?php
if(!isset($_GET['mat']))
    header('Location:../');

$materia = addslashes($_GET['mat']);
include "../../dbconfig/dbopen.php";
$sql="INSERT INTO $mat (materia) VALUES ('$materia')";
if (!$dbconn->query($sql))
{
    include "../../dbconfig/dbclose.php";
    die("Impossibile inserire materia");
}
include "../../dbconfig/dbclose.php";
?>