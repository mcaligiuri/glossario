<?php
session_start();
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));
?>
<!-- Struttura della login -->
<div class="form" id="form">
  <form autocomplete="off" onsubmit="setLogin(); return false;">
    <p id="msg"></p>
    <input type="text" placeholder="Username" title="username" id="user" required>
    <input type="password" placeholder="Password" title="password" id="pass" required>
    <input type="submit" name="accedi" title="accedi" value="Accedi">
    <input type="reset" name="annulla" title="annulla" value="Annulla" onclick="resetForm();">
    <input type="text" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>" hidden>
  </form>
</div>