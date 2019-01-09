<?php
if (!isset($_GET['idm']) || !isset($_GET['mat']))
    header('Location:../');

$idm = $_GET['idm'];
$nome = addslashes($_GET['mat']);

include "../../dbconfig/dbopen.php";

$sql = "UPDATE $mat SET materia='$nome' WHERE idm=$idm";
if(!$dbconn->query($sql))
    echo "Impossibile rinominare la materia";

include "../../dbconfig/dbclose.php";
?>