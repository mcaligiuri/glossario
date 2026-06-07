// Query di aggiornamento in background 

async function getForm(id,tipo,nome,codm) {
  const div = document.getElementById(tipo);
  try {
    const par = new URLSearchParams();
    par.append("id",id);
    par.append("tipo",tipo);
    par.append("nome",nome);
    if (tipo == "arg") {
      par.append("codm",codm);
    }
    
    const url = "update/updForm.php?" + par.toString();
    const ric = await fetch(url, {
      method: "GET",
    });

    if(ric.ok) {
      div.innerHTML = await ric.text();
    }
    else {
      console.error("Errore dal server:", ric.status);
    }
  }
  catch(errore) {
    console.error("Si è verificato un problema nell'aggiornare la pagina:", errore);   
  }
}

// Rinomina materia o argomento
function updMA(id,tipo,nome,codm) {
  // Popup
  const popup = document.getElementById('popup');
  const btsi = document.getElementById('idyessa');
  const btno = document.getElementById('idno');
  popup.style.display="block";
  // Se clicco "NO"
  btno.onclick = function() {
    popup.style.display="none";
      return;
  }
  // Se clicco "SI"
  btsi.onclick = async function() {
    popup.style.display="none";
    const div = document.getElementById(tipo);
    const data=document.getElementById("txtupd").value;
    let dest = "";
    const par = new URLSearchParams();
    if (tipo === "mat") {
      dest = "update/updMat.php";
      par.append("idm", id);
      par.append("mat", data);
    }
     else {
      dest = "update/updArg.php";
      par.append("codm", id);
      par.append("arg", data);
    }
    try {
      const ric = await fetch(dest, {
        method: "POST",
        headers: { 
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: par, 
      });
      
      if(ric.ok) {
        if(tipo === "mat") {
          div.innerHTML = getMaterie();
        }
        else {
          div.innerHTML = getArg(codm,nome);
        }
      }
      else {
        console.error("Errore nel salvataggio dei dati.");
      }
    }
    catch(errore) {
      console.error("Si è verificato un problema:", errore); 
    }
  }
}

function updTerm(idt,coda,arg) {
  // Popup
  const popup = document.getElementById('popup');
  const btsi  = document.getElementById('idyessa');
  const btno  = document.getElementById('idno');
  popup.style.display="block";
  btno.onclick = function() {
    popup.style.display="none";
      return;
  }
  btsi.onclick = async function() {
    popup.style.display="none";
    const div = document.getElementById("ter");
    const def = document.getElementById("termdef").value;
    const term = document.getElementById("termt").value;
    
    try {
      const par = new URLSearchParams();
      par.append("idt", idt);
      par.append("coda", coda);
      par.append("term", term);
      par.append("def", def);

      const rich = await fetch("update/updTerm.php",{
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded", 
        },
        body: par,
      });
      if(ric.ok) {
        div.innerHTML = getTerm(coda,arg);
        document.getElementById("def").style.display="none";
      }
      else {
        console.error("Errore dal server:", ric.status);
      }
    }
    catch(errore) {
      console.error("Si è verificato un problema:", errore);   
    }
  }
}

// Apro menù mobile
function apri() {
  const nav = document.getElementById("nav");
  const mnu = document.getElementById("btnmnu");
  nav.style.width = "250px";
  mnu.style.display = "none";
}

// Chiudo menù mobile
function chiudi() {
  const nav = document.getElementById("nav");
  const mnu = document.getElementById("btnmnu");
  if(window.matchMedia("(max-width: 800px)")) {
    nav.style.width = "0px"
    mnu.style.display = "block";
  }
}