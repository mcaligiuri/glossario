<?php
if(empty($_GET['idt']))
    header('Location:./');

include "dbconfig/dbopen.php";
$idt = $_GET['idt'];
//$term = ucfirst($_GET['term']);
$sql = "SELECT definizione,termine FROM $ter WHERE idt=$idt";
$righe = $dbconn->query($sql);
if($righe->num_rows == 0)
{
    include "dbconfig/dbclose.php";
    die("Nessuna definizione");
}
while($riga = $righe->fetch_assoc())
{
    echo "<table><tr><td><h4>".$riga['termine']."</h4></td>\n";
    echo "<td><button id='ind' onclick='showTerm()'>indietro</button></td></tr></table>\n";
    echo "<p>". $riga['definizione']."</p>\n";
}
include "dbconfig/dbclose.php";
?>