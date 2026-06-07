<?php
// Inserisce argomento nel database
header('Content-Type: application/json');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

if(!isset($_POST['arg']) || !isset($_POST['codm'])) {
  http_response_code(400); // Bad Request
  echo json_encode(["status" => "error", "message" => "Dati non validi"]);
  exit;
}

if(trim($_POST['arg']) === '' || trim($_POST['codm']) === '') {
  http_response_code(400); // Bad Request
  echo json_encode(["status" => "error", "message" => "Dati non validi"]);
  exit;
}

$argomento = $_POST['arg'];
$codm = $_POST['codm'];

include "../../dbconfig/dbopen.php";
try {
  $sql= $dbconn->prepare("INSERT INTO $arg (argomento,codm) VALUES (?,?)");
  $sql->bind_param("si",$argomento,$codm);
  $sql->execute();
  echo json_encode(["status" => "success", "message" => "Argomento inserito correttamente!"]);
  exit;
}
catch(mysqli_sql_exception $e) {
  if ($e->getCode() == 1062) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "L'argomento '$argomento' è già presente in elenco!"]);
  }
  else {
    http_response_code(500); // 500 Internal Server Error
    echo json_encode(["status" => "error", "message" => "Errore interno del database: " . $e->getMessage()]);
  }
  exit;
}

include "../../dbconfig/dbclose.php";
?>