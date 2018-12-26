<header>
    <h1>Glossario<a class="fa fa-bars" id="mnu" onclick="apri()"></a></h1>
    <div id="mat" class="matside">
        <a href="javascript:void(0)" class="btnchiudi" onclick="chiudi()">&times;</a>
        <?php
        $sql = "SELECT * FROM $mat ORDER BY materia";
        $righe = $dbconn->query($sql);
        if($righe->num_rows == 0)
            die("Nessuna materia, aggiungine una");

        while($riga = $righe->fetch_assoc())
        {
            $idm = $riga['idm'];
            $mat = $riga['materia'];
            //echo "<a href='index.php?codm=$idm'>".$riga["materia"]."</a>\n";
            echo "<a onclick=\"getArgomenti('$idm','$mat')\">".$mat."</a>\n";
        }
        ?>
    </div>
</header>