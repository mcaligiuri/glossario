<?php
 if(!isset($_GET['coda']) || !isset($_GET['arg']))
     header('Location:../');

include "../../dbconfig/dbopen.php";
$coda = $_GET['coda'];
$nome = addslashes($_GET['arg']);
$sql = "SELECT idt,termine,definizione FROM $ter WHERE coda=$coda ORDER BY termine";
$righe = $dbconn->query($sql);
echo "<table>\n";
echo "<tr><td id='thead'><h3>Termini di $nome</h3></td>\n";
echo "<td id='thead'><a id='ind' onclick='showArg();'>indietro</a></td></tr></table>\n";
echo "<input type='text' id='insterm' placeholder='Nuovo termine'><textarea id='insdef' placeholder='Definizione'></textarea>\n";
echo "<a id='btnins' class='fa fa-plus' onclick=\"insTerm('$coda','$nome')\"></a>\n";
if($righe->num_rows == 0)
{
    echo "<p>Nessun termine da mostrare</p>\n";
    include "../../dbconfig/dbclose.php";
    return;
}
echo "<table>\n";
echo "<th>Termine</th>\n";
echo "<th>Elimina</th>\n";
while($riga = $righe->fetch_assoc())
{
    $idt = $riga['idt'];
    $term = $riga['termine'];
    echo "<tr><td><a id='lnkter' onclick=\"getDef($idt,$coda,'$nome');\">$term</a></td>\n";
    echo "<td><a id='btndel' onclick=\"delTerm($idt,$coda,'$nome');\" class='fa fa-window-minimize'></a></td><tr>\n";
}
echo "<table></table>";
include "../../dbconfig/dbclose.php";
?>