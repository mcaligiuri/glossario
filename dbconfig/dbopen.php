<?php
// Dati di connessione
include "dbconfig.php";
$dbconn = new mysqli($dbhost,$dbuser,$dbpass, $dbname);

// Controllo se la connessione è andata a buon fine
if($dbconn->connect_error)
  die("Errore MariaDB: N°". $dbconn->connect_errno . "-" . $dbconn->connect_error);

$dbconn->set_charset("utf8mb4"); // Codifica
?>