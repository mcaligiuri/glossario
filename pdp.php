<!-- Footer front end -->
<?php
$anno = "2017 / ". Date("Y");
$ip   = $_SESSION['ip'];
echo <<<HTML
  <div id="block"></div>
  <footer title="footer">
    <p>&copy; Creato e mantenuto con amore da Michele Caligiuri &hearts; $anno</p>
  </footer>
HTML;
?>