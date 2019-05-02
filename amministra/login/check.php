<?php
session_start();
// Se la variabile di sessione non è settata 
// rimanda l'utente alla login
if(!(isset($_SESSION["user"])))
    header("Location: login/");
?>