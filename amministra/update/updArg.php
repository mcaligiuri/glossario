<?php
// Rinomina argomento nel database
header('Content-Type: application/json');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

if (!isset($_POST['codm']) || !isset($_POST['arg'])){
  http_response_code(400); // Bad Request
  echo json_encode(["status" => "error", "message" => "Dati non validi - 1"]);
  exit;
}

if ($_POST['codm'] === '' || $_POST['arg'] === ''){
  http_response_code(400); // Bad Request
  echo json_encode(["status" => "error", "message" => "Dati non validi - 2"]);
  exit;
}

$codm = $_POST['codm'];
$nome = $_POST['arg'];

include "../../dbconfig/dbopen.php";

try {
  $sql = $dbconn->prepare("UPDATE $arg SET argomento=? WHERE ida=?");
  $sql->bind_param("si",$nome,$codm);
  $sql->execute();
  echo json_encode(["status" => "success", "message" => "Argomento rinominato correttamente!"]);
  exit;
}
catch(mysqli_sql_exception $e) {
  if($e->getCode() == 1062){
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "L'argomento '$nome' è già presente in elenco!"]);
  }
  else {
    http_response_code(500); 
    echo json_encode(["status" => "error", "message" => "Impossibile rinominare l'argomento"]);
  }
  exit;
}

include "../../dbconfig/dbclose.php";
?>