<?php
if(!isset($_GET['ida']))
    header('Location:../');

$ida = $_GET['ida'];
include "../../dbconfig/global.php";
try
{
    // Elimino argomento
    $sql = "DELETE FROM $arg WHERE ida=$ida";
    checkArgTerm($ida,$sql);
    // Provo a eliminare termini associati
    // all'argomento eliminato
    $sql = "DELETE FROM $ter WHERE coda=$ida";
    checkArgTerm($ida,$sql);
}
catch(Exception $e) { echo "Errore: " .$e->getMessage(); }

function checkArgTerm($ida,$sql)
{
    include "../../dbconfig/dbopen.php";
    if(!$dbconn->query($sql))
        throw new Exception("Impossibile portare a termine l'operazione");
        
    include "../../dbconfig/dbclose.php";
    return true;
}
?>