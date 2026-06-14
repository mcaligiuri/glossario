<?php
// MATERIE
echo "<h4 title='Materie'>Materie</h4>\n";
$sql = "SELECT idm,materia FROM `$mat` ORDER BY materia";
$righe = $dbconn->query($sql);
if($righe->num_rows == 0)
  echo("Nessuna materia, aggiungine una");

while($riga = $righe->fetch_assoc()) {
  $idm = $riga['idm'];
  $mat = $riga['materia'];
  echo "<a title='Visualizza argomenti di $mat' onclick=\"getArgomenti('$idm','$mat')\">".$mat."</a>\n";
}
?>