<?php
header('Content-Type: application/json');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

if(!isset($_POST['term']) || !isset($_POST['coda']) || !isset($_POST['def'])) {
  http_response_code(400); // Bad Request
  echo json_encode(["status" => "error", "message" => "Dati non validi"]);
  exit;
}

if (trim($_POST['term']) === '' || trim($_POST['coda']) === ''|| trim($_POST['def']) === '') {
  http_response_code(400); // Bad Request
  echo json_encode(["status" => "error", "message" => "Dati non validi"]);
  exit;
}

$term =  $_POST['term'];
$def  =  $_POST['def'];
$coda =  $_POST['coda'];
include "../../dbconfig/dbopen.php";

try {
  // Inserisco un nuovo termine con definizione nel database
  $sql = $dbconn->prepare("INSERT INTO $ter (coda,termine,definizione) VALUES (?,?,?)");
  $sql->bind_param("iss",$coda,$term,$def);
  $sql->execute();
  echo json_encode(["status" => "success", "message" => "Termine inserito correttamente!"]);
  exit;
}
catch(mysqli_sql_exception $e) {
  if ($e->getCode() == 1062) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Il termine '$term' è già presente in elenco!"]);
  }
  else {
    http_response_code(500); // 500 Internal Server Error
    echo json_encode(["status" => "error", "message" => "Errore interno del database: " . $e->getMessage()]);
  }
  exit;
}

include "../../dbconfig/dbclose.php";
?>