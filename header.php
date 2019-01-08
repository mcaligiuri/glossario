<header>
    <h1 title="Glossario"><a href="./">Glossario</a><a title="menù mobile" class="fa fa-bars" id="mnu" onclick="apri()"></a></h1>
    <!-- Menù di navigazione -->
    <nav>
    <a href="./" title="Ricarica la homepage" class="fa fa-home" style="font-size: 18px;"><span> Home</span></a>
    <a onclick="getInfo('info.php');" title="Mostra delle info" class="fa fa-info-circle" style="font-size: 18px;"><span> Info</span></a>
    <a href="./amministra" target="_blank" title="Accedi come amministratore" class="fa fa-key" style="font-size: 18px;"><span> Admin</span></a>
    </nav>
    <!-- Materie -->
    <div id="mat" class="matside">
        <a href="javascript:void(0)" class="btnchiudi" onclick="chiudi()">&times;</a>
        <?php include "mat.php"; ?>
    </div>
</header>