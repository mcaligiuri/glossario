<?php
// Rinomina termine nel database
header('Content-Type: application/json');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

if (!isset($_POST['idt']) || !isset($_POST['coda']) || !isset($_POST['term']) || !isset($_POST['def'])) {
  http_response_code(400);  
  echo json_encode(["status" => "error", "message" => "Dati non validi"]);
  exit;
}

if ($_POST['idt'] === '' || $_POST['coda'] === '' || $_POST['term'] === '' || $_POST['def'] === '') {
  http_response_code(400);  
  echo json_encode(["status" => "error", "message" => "Dati non validi"]);
  exit;
}

$idt  = $_POST['idt'];
$coda = $_POST['coda'];
$term = $_POST['term'];
$def  = $_POST['def'];

include "../../dbconfig/dbopen.php";

$sql = $dbconn->prepare("UPDATE $ter SET termine=?,definizione=?,coda=? WHERE idt=?");
$sql->bind_param("ssii", $term, $def, $coda, $idt);
if(!$sql->execute()) {
  http_response_code(500); 
  echo json_encode(["status" => "error", "message" => "Impossibile rinominare il termine"]);
  exit;
}

include "../../dbconfig/dbclose.php";
?>