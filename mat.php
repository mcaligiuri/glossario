<?php
$sql = "SELECT * FROM $mat ORDER BY materia";
$righe = $dbconn->query($sql);
if($righe->num_rows == 0)
    die("Nessuna materia, aggiungine una");

echo "<h4 title='Materie'>Materie</h4>\n";
while($riga = $righe->fetch_assoc())
{
    $idm = $riga['idm'];
    $mat = $riga['materia'];
    echo "<a title='$mat' onclick=\"getArgomenti('$idm','$mat')\">".$mat."</a>\n";
}
?>