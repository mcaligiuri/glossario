<?php
session_start();
// Se le variabili di sessione non sono settate, allora l'utente non è loggato e viene rediretto alla pagina di login
if(!(isset($_SESSION["user"]) && isset($_SESSION["user_id"]) && isset($_SESSION["login_time"]) && isset($_SESSION["ip"]))) {
  header("Location: login/");
  exit;
}
?>