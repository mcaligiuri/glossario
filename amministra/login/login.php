<?php
if(!(isset($_POST['user']) || isset($_POST['pass']))) // Accesso non autorizzato
    header("Location:./");

include "../../dbconfig/dbopen.php";
$user = addslashes($_POST['user']);
$pass = addslashes($_POST['pass']);
$sql = "SELECT * FROM $ute WHERE username='$user'";
$righe = $dbconn->query($sql);
// Utente non trovato
if($righe->num_rows == 0)
{
    $esito = 1;
    echo $esito;
    return; 
}
while($riga = $righe->fetch_assoc())
{
    $passdb = $riga['password'];
    // Password errata
    if(md5($pass) != $passdb)
    {
        include "../../dbconfig/dbclose.php";
        $esito = 3; 
        echo $esito;
        return;
    }
}
include "../../dbconfig/dbclose.php";
$esito = 2;
// Accesso consentito
if ($esito == 2)
{
    session_start();
    $_SESSION["user"] = $user;
    echo $esito;
}
?>