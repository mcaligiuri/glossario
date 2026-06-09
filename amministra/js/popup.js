// Mostra all'utente eventuale errore 

const popup = document.getElementById('popup');
const btsi = document.getElementById('idyessa');
const cont = document.getElementById('poptesto');
const btno = document.getElementById('idno');
const testoIniziale = cont.textContent;

function mostraErrori(msg) {
  cont.textContent = msg;
  btno.textContent = "Ok";

  btsi.classList.add("hidden");
  popup.classList.add("visible"); 
  btno.addEventListener('click', function() {
    cont.textContent = testoIniziale;
    btno.textContent = "No";
    
    btsi.classList.remove("hidden");
    popup.classList.remove("visible");
  }, { once: true }); 
}