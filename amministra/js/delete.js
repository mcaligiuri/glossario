// Cancellazione materie con argomenti e termini richiamando le pagine php in background

// Richiesta cancellazione materia
function delMat(idm) {
  // Popup
  const popup = document.getElementById('popup');
  const btsi = document.getElementById('idyessa');
  const btno = document.getElementById('idno');
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
  const popup = document.getElementById('popup');
  const btsi = document.getElementById('idyessa');
  const btno = document.getElementById('idno');
  popup.style.display="block";
  btno.onclick = function() {
    popup.style.display="none";
    return;
  }
  btsi.onclick = async function() {
    popup.style.display="none";
    const arg = document.getElementById("arg");
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
  const popup = document.getElementById('popup');
  const btsi = document.getElementById('idyessa');
  const btno = document.getElementById('idno');
  popup.style.display="block";
  btno.onclick = function() {
    popup.style.display="none";
      return;
  }
  btsi.onclick = async function() {
    popup.style.display="none";
    const arg = document.getElementById("arg");
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