<?php
// Definizioni termini
if(empty($_GET['idt']) || !is_numeric($_GET['idt'])) {
  header('Location:./');
  exit;
}

include "dbconfig/dbopen.php";
$idt = intval($_GET['idt']);

$sql = "SELECT definizione,termine FROM $ter WHERE idt=$idt";
$righe = $dbconn->query($sql);
if($righe->num_rows == 0) {
  include "dbconfig/dbclose.php";
  die("Nessuna definizione");
}
while($riga = $righe->fetch_assoc()) {
  echo "<table><tr><td><h3>Definizione di: ".htmlspecialchars($riga['termine'])."</h3></td>\n";
  echo "<td><button id='ind' onclick='showTerm()'>indietro</button></td></tr></table>\n";
  echo "<p>". htmlspecialchars($riga['definizione'])."</p>\n";
}
include "dbconfig/dbclose.php";
?>