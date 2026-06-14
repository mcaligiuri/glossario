<?php
// Dati di connessione
include "dbconfig.php";

try {
  $dbconn = new mysqli($dbhost,$dbuser,$dbpass, $dbname);
  $dbconn->set_charset("utf8mb4"); // Codifica
}
catch(mysqli_sql_exception $e) {
  // In base al codice di errore di MariaDB visualizzo errore comprensibile
  switch ($e->getCode()) {
    case 1045:
      $messaggio = "Accesso negato! Controlla username e password.";
      break;
    case 1049:
      $messaggio = "Il database selezionato non esiste.";
      break;
    case 2002:
      $messaggio = "Il server del database è offline o l'host è errato.";
      break;
    default:
      $messaggio = "Si è verificato un problema di connessione imprevisto.";
      break;
  }
  die("<h1 id='dberror'><strong>Errore di connessione MariaDB: ". $messaggio."</strong></h1>");
  
}
?>