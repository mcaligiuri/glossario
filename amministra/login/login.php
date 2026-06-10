<?php
session_start();

// Protezione CSRF
if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
  echo "CSRF token mismatch. Accesso negato.";
  http_response_code(403);
  die("CSRF token mismatch");
}

if(!(isset($_POST['user']) || isset($_POST['pass']))){ // Accesso non autorizzato
  header("Location:./");
  exit;
}

include "../../dbconfig/dbopen.php";

$user = trim($_POST['user']);
$pass = ($_POST['pass']);

// 5 tentativi di accesso dallo stesso IP negli ultimi 15 minuti
$ip = $_SERVER['REMOTE_ADDR'];
$attempt_key = "login_attempts_$ip";


if (!isset($_SESSION[$attempt_key])) { $_SESSION[$attempt_key] = []; }

// Ultimi 15 minuti
$now = time();
$_SESSION[$attempt_key] = array_filter($_SESSION[$attempt_key],fn($t) => $now - $t < 900 );

if (count($_SESSION[$attempt_key]) >= 5) {
  error_log("Troppi tentativi di accesso da $ip");
  http_response_code(429);
  echo 4;
  exit;
}

$sql = $dbconn->prepare("SELECT idu,password FROM $ute WHERE username = ?");
$sql->bind_param("s", $user);
$sql->execute();
$righe = $sql->get_result();

// Ritardo intenzionale per evitare timing attacks
usleep(random_int(100000, 300000));

// Utente non trovato
if($righe->num_rows === 0) {
  $_SESSION[$attempt_key][] = $now;
  $esito = 1;
  echo $esito;
  exit; 
}

$riga = $righe->fetch_assoc();

// Password errata codice 3
//if (!password_verify($pass, password_hash($riga['password'],PASSWORD_DEFAULT))) {
if (!password_verify($pass,$riga['password'])) {
  $_SESSION[$attempt_key][] = $now;
  error_log("Login fallito per utente: $user");
  $esito = 3;
  echo $esito;
  exit;
}

include "../../dbconfig/dbclose.php";

// Accesso consentito codice 2
$esito = 2;
$_SESSION["user"] = $user;
$_SESSION["user_id"] = $riga['idu'];
$_SESSION["login_time"] = $now;
$_SESSION["ip"] = $_SERVER['REMOTE_ADDR'];

echo $esito;
exit;

?>