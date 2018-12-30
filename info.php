<div class="mail" id="form">
    <h4 id="msg">A: Michele Caligiuri</h4>
    <label for="txtnome">Autore</label>
    <input type="text" id="txtnome" placeholder="Il tuo nome">

    <label for="txtmail">Email</label>
    <input type="mail" id="txtmail" placeholder="Il tuo indizzo mail">

    <label for="txtogg">Oggetto</label>
    <input type="text" id="txtogg" placeholder="Oggetto della mail">

    <label for="txtmess">Testo</label>
    <textarea id="txtmess" placeholder="Scrivi qualcosa..."></textarea>
    <button onclick="setEmail();">Invia</button>
    <button onclick="resetCampi();" id="reset">Reset</button>
</div>