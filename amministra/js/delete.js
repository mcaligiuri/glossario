// Cancellazione materie con argomenti e termini richiamando le pagine php in background

// Variabili usate da tutte le funzioni di seguito
const popup = document.getElementById('popup');
const btsi  = document.getElementById('idyessa');
const btno  = document.getElementById('idno');
const arg   = document.getElementById("arg");

// Richiesta cancellazione materia
function delMat(idm) {
  // Popup
  popup.style.display="block";
  btno.onclick = function() {
    popup.style.display="none";
    return;
  }
  btsi.onclick = async function() {
    popup.style.display="none";
    try {
      const par = new URLSearchParams();
      par.append("idm",idm);
      const ric = await fetch("delete/delMat.php", {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: par, 
      });
      if (ric.ok) {
        getMaterie(); // Ricarico elenco materie
      }
      else {
        console.error("Errore nella richiesta."); 
      }
    }
    catch(errore) {
      console.error("Si è verificato un problema nella richiesta di cancellazione:", errore);
    }
    return "Caricamento..."; 
  }
}

// Richiesta cancellazione argomento
function delArg(ida,codm,materia) {
  // Popup
  popup.style.display="block";
  btno.onclick = function() {
    popup.style.display="none";
    return;
  }
  btsi.onclick = async function() {
    popup.style.display="none";
    try {
      const par = new URLSearchParams();
      par.append("ida",ida);
      const ric = await fetch("delete/delArg.php",{
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: par,
      });
      if(ric.ok) {
        getArg(codm,materia);// Ricarico elenco argomenti
      }
      else {
        console.error("Errore nella richiesta."); 
      }
    }
    catch(errore) {
      console.error("Si è verificato un problema nella cancellazione dell'agomento:", errore);
    }
    return "Caricamento..."; 
  }
}

// Richiesta cancellazione termine
function delTerm(idt,coda,argomento) {
  // Popup
  popup.style.display="block";
  btno.onclick = function() {
    popup.style.display="none";
      return;
  }
  btsi.onclick = async function() {
    popup.style.display="none";
    try{
      const par = new URLSearchParams();
      par.append("idt",idt);
      const ric = await fetch("delete/delTerm.php",{
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: par,
      });
      if(ric.ok) {
        getTerm(coda,argomento);// Ricarico elenco termini
      }
      else {
        console.error("Errore nella richiesta di cancellazione del termine.");         
      }
    }
    catch (errore) {
      console.error("Si è verificato un problema nella cancellazione del termine:", errore);
    }
    return "Caricamento..."; 
  }
}