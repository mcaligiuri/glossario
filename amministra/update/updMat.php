<?php
// Rinomina materia nel database
header('Content-Type: application/json');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

if (!isset($_POST['idm']) || !isset($_POST['mat'])) {
  http_response_code(400); // Bad Request
  echo json_encode(["status" => "error", "message" => "Dati non validi"]);
  exit;
}

if(trim($_POST['idm']) === '' || trim($_POST['mat']) === '') {
  http_response_code(400); // Bad Request
  echo json_encode(["status" => "error", "message" => "Dati non validi"]);
  exit;
}

$idm =  $_POST['idm'];
$nome = $_POST['mat'];

include "../../dbconfig/dbopen.php";

try {
  $sql = $dbconn->prepare("UPDATE $mat SET materia=? WHERE idm=?");
  $sql->bind_param("si",$nome,$idm);
  $sql->execute();
  echo json_encode(["status" => "success", "message" => "Materia rinominata correttamente!"]);
  exit;
}
catch(mysqli_sql_exception $e) {
  if ($e->getCode() == 1062){
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "La materia '$nome' è già presente in elenco!"]);
  }
  else {
    http_response_code(500); 
    echo json_encode(["status" => "error", "message" => "Impossibile rinominare la materia"]);
  }
  exit;
}

include "../../dbconfig/dbclose.php";
?>