<?php
if(!isset($_GET['idm']))
    header('Location:../');

$idm = $_GET['idm'];
include "../../dbconfig/global.php";

try
{
    // Cancello materia
    $sql = "DELETE FROM $mat WHERE idm=$idm";
    getDel($sql,$idm);
    
    // Cancello argomenti con termini che erano associati alla materia
    $sql = "DELETE $arg,$ter FROM $arg INNER JOIN $ter ON $arg.ida=$ter.coda WHERE $arg.codm=$idm";
    getDel($sql,$idm);

    // Cancello argomenti senza termini associati alla materia
    $sql = "DELETE FROM $arg WHERE codm=$idm";
    getDel($sql,$idm);
}
catch(Exception $e) { echo "Errore: " .$e->getMessage(); }


function getDel($sql,$idm)
{
    include "../../dbconfig/dbopen.php";
    if(!$dbconn->query($sql))
        throw new Exception("Si è verificato un problema.");

    include "../../dbconfig/dbclose.php";
    return true;
}
?>