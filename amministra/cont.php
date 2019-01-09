<article class="cont">
    <!-- Materie -->
    <div id="mat">
        <?php 
        echo "<h3>Ciao ".ucfirst($_SESSION['user']).
        " !</h3>\n<p>Da qui puoi gestire le materie scolastiche. Hai la possibilità di aggiungere, modificare e rimuovere argomenti e termini.</p>\n";
        ?>
    </div>
    <!-- Argomenti -->
    <div id="arg"></div>
    <!-- Termini -->
    <div id="ter"></div>
    <!-- Definizione -->
    <div id="def"></div>
    <!-- <div id="use"></div> -->
</article>