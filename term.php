<?php
// TERMINI
echo "<input type='text' id='cercat' onkeyup='getElem(2)' placeholder='Cerca termine...'>";
if(empty($_GET['coda']))
    header('Location:./');

include "dbconfig/dbopen.php";
$coda = $_GET['coda'];
$arg = $_GET['arg'];
$mat = ucfirst($_GET['mat']);
$sql = "SELECT * FROM $ter WHERE coda=$coda ORDER BY termine";
$righe = $dbconn->query($sql);
if($righe->num_rows == 0)
{
    include "dbconfig/dbclose.php";
    die("Nessun termine trovato");
}
echo "<table><tr><td><h4>".$mat . ' - ' . $arg . "</h4></td>\n";
echo "<td><button id='ind' onclick='showArg()'>indietro</button></td></tr></table>\n";
while($riga = $righe->fetch_assoc())
{
    $idt = $riga['idt'];
    $term = $riga["termine"];
    echo "<a title='$term' onclick=\"getDef('$idt')\">".$term."</a>\n";
}
include "dbconfig/dbclose.php";
?>