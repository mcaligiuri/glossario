<?php
header('Content-Type: application/json');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

if (!isset($_POST['mat']) || trim($_POST['mat']) === '') {
  http_response_code(400); // Bad Request
  echo json_encode(["status" => "error", "message" => "Dati non validi"]);
  exit;
}

//  Inserisco una nuova materia nel database
$materia = ($_POST['mat']);
include "../../dbconfig/dbopen.php";
try {
  $sql = $dbconn->prepare("INSERT INTO $mat (materia) VALUES (?)");
  $sql->bind_param("s", $materia);
  $sql->execute();
  echo json_encode(["status" => "success", "message" => "Materia inserita correttamente!"]);
  exit;
}
// Gestione errori MariaDB
// 1062: codice errore campo duplicato di MariaDB
catch(mysqli_sql_exception $e) {
  if ($e->getCode() == 1062) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "La materia '$materia' è già presente in elenco!"]);
  }
  else {
    http_response_code(500); // 500 Internal Server Error
    echo json_encode(["status" => "error", "message" => "Errore interno del database: " . $e->getMessage()]);
  }
  exit;
}
include "../../dbconfig/dbclose.php";

?>