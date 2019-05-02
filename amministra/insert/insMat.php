<?php
if(!isset($_GET['mat'])) // Controllo
    header('Location:../');

//  Inserisco una nuova materia nel database
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