// Funzioni per eseguire una ricerca rapida nelle varie liste
function getElem(val) {
  // Variabili
  const cont   = document.getElementById("cont");
  const term   = document.getElementById("term");
  const input  = document.getElementById("cerca");
  const filter = input.value.toUpperCase();
  const div    = document.getElementById("arg");
  const a      = div.getElementsByTagName("a"); 
  let txtValue = "";

  switch(val) {
    // Filtro argomenti
    case 1: {
      if(term.style.display === "block" || cont.style.display === "block") {
        term.style.display = "none";
        cont.style.display = "none";
      }
      for (let i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) a[i].style.display = "";
        else a[i].style.display = "none";
        }
        break;
    }
    // Filtro termini
    case 2: {
      if(cont.style.display == "block")
        cont.style.display = "none";
  
      for (let i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) a[i].style.display = "";
        else a[i].style.display = "none";
      }
      break;
    }
  }
}