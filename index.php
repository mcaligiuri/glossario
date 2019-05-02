<!DOCTYPE html>
<html lang="it">
<!-- Head -->
<?php include "head.php"; ?>
<body>
    <div class="corpo"><!-- Pagina iniziale -->
        <?php include "dbconfig/dbopen.php"; ?>
        <!-- Intestazione -->
        <?php include "header.php"; ?>
        <!-- Contenuti -->
        <?php include "cont.php"; ?>
        <?php include "dbconfig/dbclose.php"; ?>
    </div>
    <!-- Pdp -->
    <?php include "pdp.php"; ?>
</body>
</html>