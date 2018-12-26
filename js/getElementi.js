// Richiedo argomenti in background alla pagina PHP
function getArgomenti(codm,mat)
{
  chiudi();
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      document.getElementById("arg").style.display = "block";
      document.getElementById("arg").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "arg.php?codm="+ codm+"&mat="+mat, true);
  xmlhttp.send();
}

// Richiedo termini in background alla pagina PHP
function getTermini(coda,mat,arg)
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      document.getElementById("term").style.display = "block";
      document.getElementById("term").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "term.php?coda="+ coda + "&arg="+arg +"&mat="+mat  , true);
  xmlhttp.send();
}

// Richiedo definizioni in background alla pagina PHP
function getDef(idt)
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      document.getElementById("cont").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "def.php?idt="+ idt, true);
  xmlhttp.send();
}