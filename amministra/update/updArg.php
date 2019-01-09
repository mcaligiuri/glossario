<?php
if (!isset($_GET['codm']) || !isset($_GET['arg']))
    header('Location:../');

$codm = $_GET['codm'];
$nome = addslashes($_GET['arg']);

include "../../dbconfig/dbopen.php";

$sql = "UPDATE $arg SET argomento='$nome' WHERE ida=$codm";
if(!$dbconn->query($sql))
    echo "Impossibile rinominare l'argomento";

include "../../dbconfig/dbclose.php";
?>