<header>
    <h1>Glossario<a class="fa fa-bars" id="mnu" onclick="apri()"></a></h1>
    <!-- Menù di navigazione -->
    <nav>
    <a href="./" class="fa fa-home" style="font-size: 18px;"><span> Home</span></a>
    <a href="index.php" class="fa fa-info-circle" style="font-size: 18px;"><span> Info</span></a>
    <a href="./amministra" class="fa fa-key" style="font-size: 18px;"><span> Admin</span></a>
    </nav>
    <!-- Materie -->
    <div id="mat" class="matside">
        <a href="javascript:void(0)" class="btnchiudi" onclick="chiudi()">&times;</a>
        <?php
        $sql = "SELECT * FROM $mat ORDER BY materia";
        $righe = $dbconn->query($sql);
        if($righe->num_rows == 0)
            die("Nessuna materia, aggiungine una");
        
        echo "<h4>Materie</h4>\n";
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
