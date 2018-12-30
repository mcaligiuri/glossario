<?php
include "dbconfig/dbopen.php";
echo "<input type='text' id='cerca' onkeyup='getElem(1)' placeholder='Cerca argomento...'>";
if(!empty($_GET['codm']) || empty($_GET['mat']))
{
    $codm = $_GET['codm'];
    $mat = strtolower($_GET['mat']);
    $sql = "SELECT * FROM $arg WHERE codm=$codm ORDER BY argomento";
    $righe = $dbconn->query($sql);
    if($righe->num_rows == 0)
        die("Nessun argomento trovato");
    
    echo "<h4>Argomenti di ". ucfirst($mat). "</h4>";
    while($riga = $righe->fetch_assoc())
    {
        $ida = $riga['ida'];
        $arg = $riga['argomento'];
        echo "<a title='$arg' onclick=\"getTermini('$ida','$mat','$arg')\">".$riga["argomento"]."</a>\n";
    }
}
include "dbconfig/dbclose.php";
?>