<?php
if(!isset($_GET['nome']) || !isset($_GET['id']) || !isset($_GET['tipo']))
    header('Location:../');
$id = $_GET['id'];
$nome = $_GET['nome'];
$tipo = $_GET['tipo'];

if($tipo == "mat")
{
    $codm = "";
    echo "<h4>Modifica la materia ".$nome."</h4>\n";
}
else
{
    $codm = $_GET['codm'];
    echo "<h4>Modifica l'argomento ".$nome."</h4>\n";
}
echo "<input type='text' id='txtupd' value='$nome'>";
echo "<button id='btnupd' onclick=\"updMA('$id','$tipo','$nome','$codm');\">Salva</button>";
if($tipo == "mat")
    echo "<button id='btnupd' onclick=\"getMaterie();\">Annulla</button>";
else
{
    include "../../dbconfig/dbopen.php";
    $sql = "SELECT materia FROM $mat WHERE idm=$codm";
    $righe = $dbconn->query($sql);
    if($righe->num_rows != 0)
    {
        while($riga = $righe->fetch_assoc())
            $nome = $riga['materia'];
    }
    include "../../dbconfig/dbclose.php";
    echo "<button id='btnupd' onclick=\"getArg('$codm','$nome');\">Annulla</button>";
}
?>