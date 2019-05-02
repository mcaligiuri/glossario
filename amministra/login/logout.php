<?
// Disconnette l'utente
// e rimanda al front end
session_start();
session_unset();
session_destroy();

header("Location:/glossario/");
?>