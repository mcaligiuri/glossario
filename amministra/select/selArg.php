<?php
 if(!isset($_GET['codm']) || !isset($_GET['mat']))
     header('Location:../');

include "../../dbconfig/dbopen.php";
$codm = $_GET['codm'];
$nome = addslashes($_GET['mat']);
$sql = "SELECT ida,argomento FROM $arg WHERE codm=$codm ORDER BY argomento";
$righe = $dbconn->query($sql);
echo "<table>\n";
echo "<tr><td id='thead'><h3>Argomenti di $nome</h3></td>\n";
echo "<td id='thead'><a id='ind' onclick='getMaterie();'>indietro</a></td></tr></table>\n";
if($righe->num_rows == 0)
{
    echo "Nessun argomento da mostrare";
    echo "<input type='text' id='insarg' placeholder='aggiungi'><a id='btnins' class='fa fa-plus' onclick=\"insArg($codm,'$nome')\"></a>";
    include "../../dbconfig/dbclose.php";
    return;
}
echo "<input type='text' id='insarg' placeholder='Nuovo argomento'><a id='btnins' class='fa fa-plus' onclick=\"insArg($codm,'$nome')\"></a>\n";
echo "<table>\n";
echo "<tr><th>Argomento</th>\n";
echo "<th>Modifica</th>\n";
echo "<th>Elimina</th></tr>\n";
$materia = $_GET['mat'];
while($riga = $righe->fetch_assoc())
{
    $ida = $riga['ida'];
    $nome = $riga['argomento'];
    echo "<tr><td><a id='lnkarg' onclick=\"getTerm('$ida','$nome');\">".$riga['argomento']."</a></td>\n";
    echo "<td><a onclick=\"getForm('$ida','arg','$nome','$codm');\" class='fa fa-pencil' id='btnmod'></a></td>\n";
    echo "<td><a id='btndel' onclick=\"delArg('$ida','$codm','$materia');\" class='fa fa-window-minimize'></a></td></tr>\n";
}
echo "</table>\n";
include "../../dbconfig/dbclose.php";
?>