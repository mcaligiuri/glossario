<?php
if(!isset($_POST['idt'])){
  header('Location:../');
  exit;
}

$idt = $_POST['idt'];
include "../../dbconfig/dbopen.php";

// Elimino termine
$sql = "DELETE FROM $ter WHERE idt=$idt";
if(!$dbconn->query($sql))
  echo "Impossibile eliminare questo termine";

include "../../dbconfig/dbclose.php";

?>