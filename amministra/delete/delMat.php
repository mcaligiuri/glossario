<?php

if(!isset($_POST['idm'])) {
  header('Location:../');
  exit;
}

$idm = $_POST['idm'];
$tipo = "M";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
  include "../../dbconfig/dbopen.php";
  $stmt = $dbconn->prepare("CALL ELIMINAMATERIA(?,?)");
  $stmt->bind_param("is",$idm,$tipo);
  $stmt->execute();
  $stmt->close();
  $dbconn->close();
}
catch (mysqli_sql_exception $e) { echo "Errore: " . $e->getMessage(); }
catch (Exception $e) {
  // Se c'è un altro tipo di errore PHP
  echo "<h1>Errore generico:</h1>";
  echo "<p>" . htmlspecialchars($e->getMessage()) . "</p>";
  exit;
}
?>