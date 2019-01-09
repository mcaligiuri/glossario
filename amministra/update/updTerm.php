<?php
if (!isset($_GET['idt']) || !isset($_GET['coda']) || !isset($_GET['term']) || !isset($_GET['def']))
    header('Location:../');

$idt = $_GET['idt'];
$coda = $_GET['coda'];
$term = addslashes($_GET['term']);
$def = addslashes($_GET['def']);

include "../../dbconfig/dbopen.php";
$sql = "UPDATE $ter SET termine='$term',definizione='$def',coda='$coda' WHERE idt=$idt";
if(!$dbconn->query($sql))
    echo "Impossibile rinominare il termine";

include "../../dbconfig/dbclose.php";
?>