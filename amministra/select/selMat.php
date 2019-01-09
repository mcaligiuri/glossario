<?php
include "../../dbconfig/dbopen.php";

$sql = "SELECT * FROM $mat ORDER BY materia";
$righe = $dbconn->query($sql);
//echo "<h3>Materie</h3>\n";
if($righe->num_rows == 0)
{
    echo "Nessuna materia da mostrare";
    echo "<input type='text' id='insmat' placeholder='Nuova materia'><a id='btnins'onclick='insMat();' class='fa fa-plus-circle'></a>";
    include "../../dbconfig/dbclose.php";
    return;
}
echo "<input type='text' id='insmat' placeholder='Nuova materia'><a id='btnins'onclick='insMat();' class='fa fa-plus'></a>";
echo "<table>\n";
echo "<tr><th>Materia</th>\n";
echo "<th>Modifica</th>\n";
echo "<th>Elimina</th></tr>\n";
while($riga = $righe->fetch_assoc())
{
    $idm = $riga['idm'];
    $nome = $riga['materia'];
    echo "<tr><td><a id='lnkmat' onclick=\"getArg('$idm','$nome');\">".$nome."</a></td>\n";
    echo "<td><a onclick=\"getForm('$idm','mat','$nome');\" class='fa fa-pencil' id='btnmod'></a></td>\n";
    echo "<td><a id='btndel' onclick='delMat($idm);'class='fa fa-window-minimize'></a></td></tr>\n";
}
echo "</table>\n";
include "../../dbconfig/dbclose.php";
?>