// Richiamo materie
async function getMaterie() {
  chiudi();
  const arg = document.getElementById('arg');
  const ter = document.getElementById('ter');
  const def = document.getElementById('def');
  if (arg.style.display === "block" || ter.style.display === "block") {
    arg.style.display="none";
    ter.style.display="none";
    def.style.display="none";
  }
  const mat = document.getElementById("mat");
  mat.style.display="block";
  try {
    const url = "select/selMat.php";
    const ric = await fetch(url, { method: "GET", });
    if (ric.ok) {
      mat.innerHTML = await ric.text();
    }
    else {
      console.error("Errore dal server:", ric.status);
    }
  }
  catch(error) {
    console.error("Si è verificato un problema nel recupero delle materie:", errore);   
  }
  return "Caricamento..."; 
}
// Richiamo argomenti
async function getArg(codm,mat){
  const arg = document.getElementById("arg");
  arg.style.display = "block";
  document.getElementById('mat').style.display="none";
  try {
    const par = new URLSearchParams();
    par.append("codm",codm);
    par.append("mat",mat);
    const ric = await fetch("select/selArg.php", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: par,
    });
    if (ric.ok) {
      arg.innerHTML = await ric.text();
    }
    else {
      console.error("Errore nel recupero degli argomenti.");
    }
  }
  catch(errore) {
    console.error("Si è verificato un problema:", errore); 
  }  
  return "Caricamento...";
}

// Richiamo termini
async function getTerm(coda,arg) {
  document.getElementById('arg').style.display="none";
  const ter = document.getElementById("ter");
  ter.style.display = "block";
  try {
    const par = new URLSearchParams();
    par.append("coda",coda);
    par.append("arg",arg);
    const url = "select/selTerm.php?" + par.toString();
    const ric = await fetch(url, {
      method: "GET",
    });
    if (ric.ok) {
      ter.innerHTML = await ric.text();
    }
    else {
      console.error("Errore dal server:", ric.status);
    }
  }
  catch(errore) {
    console.error("Si è verificato un problema:", errore); 
  }
  return "Caricamento...";
}

// Richiamo definizioni
async function getDef(idt,coda,arg) {
  document.getElementById('ter').style.display="none";
  const def = document.getElementById("def");
  def.style.display="block";
  try {
    const par = new URLSearchParams();
    par.append("idt",idt);
    par.append("coda",coda);
    par.append("arg",arg);

    const url = "select/selDef.php?" + par.toString();
    const ric = await fetch(url,{
      method: "GET",
    });
    if (ric.ok) {
      def.innerHTML = await ric.text();
    }
    else {
      console.error("Errore dal server:", ric.status);
    }
  }
  catch(errore) {
    console.error("Si è verificato un problema nel richiamare le definizioni:", errore);   
  }
}

// Mostro nascondo div 
function showArg() {
  document.getElementById('ter').style.display = "none";
  document.getElementById('arg').style.display = "block";
}

function showTer() {
  document.getElementById('def').style.display = "none";
  document.getElementById('ter').style.display = "block";
}