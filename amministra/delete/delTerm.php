<?php
if(!isset($_GET['idt'])) // Controllo
    header('Location:../');

$idt = $_GET['idt'];
include "../../dbconfig/dbopen.php";

// Elimino termine
$sql = "DELETE FROM $ter WHERE idt=$idt";
if(!$dbconn->query($sql))
    echo "Impossibile eliminare questo termine";

include "../../dbconfig/dbclose.php";

?>