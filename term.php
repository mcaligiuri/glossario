<?php
include "dbconfig/dbopen.php";
echo "<input type='text' id='cercat' onkeyup='getElem(2)' placeholder='Cerca termine...'>";
if(!empty($_GET['coda']))
{
    $coda = $_GET['coda'];
    $arg = $_GET['arg'];
    $mat = ucfirst($_GET['mat']);
    $sql = "SELECT * FROM $ter WHERE coda=$coda ORDER BY termine";
    $righe = $dbconn->query($sql);
    if($righe->num_rows == 0)
        die("Nessun termine trovato");
    
    echo "<h4>".$mat . ' - ' . $arg . "</h4>";
    while($riga = $righe->fetch_assoc())
    {
        $idt = $riga['idt'];
        $term = $riga["termine"];
        echo "<a onclick=\"getDef('$idt')\">".$term."</a>\n";
        //echo "<a>".$riga['termine']."</a>";
    }
}
include "dbconfig/dbclose.php";
?>