// Apro menù mobile
function apri() {
  const mat = document.getElementById("mat");
  const mnu = document.getElementById("mnu");
  mat.style.width = "250px";
  mnu.style.display = "none";
}

// Chiudo menù mobile
function chiudi(){
  const mat = document.getElementById("mat");
  const mnu = document.getElementById("mnu");  
  if(window.matchMedia("(max-width: 800px)")) {
    mat.style.width = "0px"
    mnu.style.display = "block";
  }
}

// Mostro e nascondo al click del
// pulsante indietro
function showTerm() {
  const def = document.getElementById("cont");
  const term = document.getElementById("term");
  def.style.display = "none";
  term.style.display = "block";
}

// Mostro argomenti, nascondo i termini
function showArg() {
  const ter = document.getElementById("term");
  const arg = document.getElementById("arg");
  ter.style.display = "none";
  arg.style.display = "block";
}