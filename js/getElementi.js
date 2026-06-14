// Tecnica Ajax usata per aggiornare i contenuti in background

// Variabili usate da tutte le funzioni
const termini   = document.getElementById("term");
const argomenti = document.getElementById("arg");
const cont      = document.getElementById("cont");

// Richiedo argomenti in background alla pagina PHP
async function getArgomenti(codm,mat) {
  // Chiudo barra di navigazione
  chiudi();
  
  // Gestisco richiesta
  try {
    const par = new URLSearchParams();
    par.append("codm",codm);
    par.append("mat",mat);
    const ric = await fetch("arg.php?"+ par.toString(), {
      method: "GET",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
    if (ric.ok) {
      argomenti.style.display = "block";
      cont.style.display = "none";
      argomenti.innerHTML = await ric.text();
      if(termini.style.display === "block" || cont.style.display === "block") {
        termini.style.display = "none";
        cont.style.display = "none";
      }
    }
    else {
      console.error("Errore nel recupero degli argomenti.");
    }
  }
  catch(e) {
    console.error("Si è verificato un problema nell'aggiornare la pagina", e);   
  }
}
 
// Richiedo termini in background alla pagina PHP
async function getTermini(coda,mat,arg) {
  try {
    const par = new URLSearchParams();
    par.append("coda",coda);
    par.append("arg",arg);
    par.append("mat",mat);
    const ric = await fetch("term.php?" + par.toString(), {
      method: "GET",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
    if (ric.ok) {
      argomenti.style.display = "none";
      termini.style.display = "block";
      termini.innerHTML = await ric.text();
    }
    else {
      console.error("Errore nel recupero dei termini.");
    }
  }
  catch(e) {
    console.error("Si è verificato un problema", e);   
  }
}

// Richiedo definizioni in background alla pagina PHP
async function getDef(idt) {
  try {
    const par = new URLSearchParams();
    par.append("idt",idt);
    const ric = await fetch("def.php?"+ par.toString(), {
      method: "GET",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
    if (ric.ok) {
      cont.style.display = "block";
      termini.style.display = "none";
      cont.innerHTML = await ric.text();
    }
    else {
      console.error("Errore nel recupero delle definizioni.");
    }
  }
  catch(e) {
    console.error("Si è verificato un problema", e);
  }
}

// Pagina delle info
async function getInfo(page) {
  try {
    const ric = await fetch(page, {
      method: "GET",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
    if (ric.ok) {
      cont.style.display = "block";
      argomenti.style.display = "none";
      termini.style.display = "none";
      cont.innerHTML = await ric.text();
    }
    else {
      console.error("Errore nel caricamento delle info");
    }
  }
  catch(e) {
    console.error("Si è verificato un problema", e);
  }
}