// Eseguo inserimenti nel database richiamando le specifiche pagine php in background

// Materie
async function insMat() {
  const mat = document.getElementById("insmat").value;
  if(mat === "") return;
  const div = document.getElementById("mat");
  try {
    const ric = await fetch("insert/insMat.php", {
      method: "POST",
      headers: { 
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: "mat=" + encodeURIComponent(mat) 
    });
    if (ric.ok) {
      div.innerHTML = getMaterie();
    }
    else {
      console.error("Errore dal server:", ric.status);
    }
  } 
  catch(errore) {
    console.error("Si è verificato un problema:", errore);
  }
}
// Argomenti
async function insArg(codm,mat) {
  const arg = document.getElementById("insarg").value;
  if(arg === "") return;
  const div = document.getElementById("arg");
  try {
    const parametri = new URLSearchParams();
    parametri.append("arg", arg);
    parametri.append("codm", codm);
    const ric = await fetch("insert/insArg.php", {
      method: "POST",
      headers: { 
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: parametri, 
    });
    if(ric.ok) {
      div.innerHTML = getArg(codm,mat);  
    }
    else {
      console.error("Errore dal server:", ric.status);
    }
  } 
  catch(errore) {
    console.error("Si è verificato un problema:", errore);
  }
}
// Termini
async function insTerm(coda,arg) {
  const tit = document.getElementById("insterm").value;
  const def = document.getElementById("insdef").value;
  if(tit === "" || def === "") return;

  const div = document.getElementById("ter");
  try {
    const parametri = new URLSearchParams();
    parametri.append("term", tit);
    parametri.append("def", def);
    parametri.append("coda", coda);
    const ric = await fetch("insert/insTerm.php", {
      method: "POST",
      headers: { 
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: parametri,
    });
    if(ric.ok) {
      div.innerHTML = getTerm(coda,arg);
    }
  } 
  catch(errore) {
    console.error("Si è verificato un problema:", errore);   
  }
}