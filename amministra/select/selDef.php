<?php
 if(!isset($_GET['idt']) || !isset($_GET['coda']) || !isset($_GET['arg']))
     header('Location:../');

include "../../dbconfig/dbopen.php";
$idt = $_GET['idt'];
$coda = $_GET['coda'];
$argo = $_GET['arg'];
$sql = "SELECT termine,definizione FROM $ter WHERE idt=$idt";
$righe = $dbconn->query($sql);
echo "<a id='ind' onclick='showTer();'>indietro</a>";
if($righe->num_rows == 0)
    return;

while($riga = $righe->fetch_assoc())
{
    $term = ($riga['termine']);
    $def = $riga['definizione'];
    echo "<input id='termt' type=\"text\" value='$term'>\n";
    echo "<textarea id='termdef'>$def</textarea>\n";
    echo "<a onclick=\"updTerm('$idt','$coda','$argo');\">Salva</a>";
}
include "../../dbconfig/dbclose.php";
?>