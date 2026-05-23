<?php
if(!isset($_POST['ida'])) {
  header('Location:../');
  exit;
}
$ida = $_POST['ida'];
$tipo = "A";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try {
  include "../../dbconfig/dbopen.php";
  $stmt = $dbconn->prepare("CALL ELIMINAMATERIA(?,?)");
  $stmt->bind_param("is",$ida,$tipo);
  $stmt->execute();
  $stmt->close();
  $dbconn->close();
}
catch (mysqli_sql_exception $e) { echo "Errore: " . $e->getMessage(); }
catch (Exception $e) {
  // Se c'è un altro tipo di errore PHP
  echo "<h1>Errore generico PHP:</h1>";
  echo "<p>" . htmlspecialchars($e->getMessage()) . "</p>";
  exit;
}
?>