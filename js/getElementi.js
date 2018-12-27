// Richiedo argomenti in background alla pagina PHP
function getArgomenti(codm,mat)
{
  // Variabili
  var cont, termini,argomenti,mnu;
  termini = document.getElementById("term");
  argomenti = document.getElementById("arg");
  cont = document.getElementById("cont");
  mnu = document.getElementById("mnu");

  // Chiudo barra di navigazione
  chiudi();
  
  // Gestisco richiesta
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      argomenti.style.display = "block";
      cont.style.display = "none";
      argomenti.innerHTML = this.responseText;
      if(termini.style.display=="block" || cont.style.display=="block")
      {
        termini.style.display="none";
        cont.style.display="none";
      }
    }
  };
  xmlhttp.open("GET", "arg.php?codm="+ codm+"&mat="+mat, true);
  xmlhttp.send();
}

// Richiedo termini in background alla pagina PHP
function getTermini(coda,mat,arg)
{
  var termini;
  termini = document.getElementById("term");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      termini.style.display = "block";
      termini.innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "term.php?coda="+ coda + "&arg="+arg +"&mat="+mat  , true);
  xmlhttp.send();
}

// Richiedo definizioni in background alla pagina PHP
function getDef(idt)
{
  var cont;
  cont = document.getElementById("cont");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200)
    {
      cont.style.display = "block";
      cont.innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "def.php?idt="+ idt, true);
  xmlhttp.send();
}