// Cancellazione materie con argomenti e termini richiamando le pagine php in background
function delMat(idm) {
  // Popup
  var popup = document.getElementById('popup');
  var btsi = document.getElementById('idyessa');
  var btno = document.getElementById('idno');
  popup.style.display="block";
  btno.onclick = function() {
    popup.style.display="none";
    return;
  }
  btsi.onclick = function() {
    popup.style.display="none";
    var ric = new XMLHttpRequest();
    ric.open("POST", "delete/delMat.php", true);
    ric.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ric.send("idm="+encodeURIComponent(idm));
    ric.onreadystatechange = function() {
      if (this.readyState != 4 || this.status != 200)
        return;

      getMaterie();// Ricarico elenco materie
    }
    return "Caricamento..."; 
  }
}

function delArg(ida,codm,materia) {
  // Popup
  var popup = document.getElementById('popup');
  var btsi = document.getElementById('idyessa');
  var btno = document.getElementById('idno');
  popup.style.display="block";
  btno.onclick = function() {
    popup.style.display="none";
    return;
  }
  btsi.onclick = function() {
    popup.style.display="none";
    var ric = new XMLHttpRequest();
    arg = document.getElementById("arg");
    ric.open("POST", "delete/delArg.php", true);
    ric.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ric.send("ida="+encodeURIComponent(ida));
    ric.onreadystatechange = function() {
      if (this.readyState != 4 || this.status != 200)
        return;
      getArg(codm,materia);// Ricarico elenco argomenti
    }
    return "Caricamento..."; 
  }
}

function delTerm(idt,coda,argomento) {
  // Popup
  var popup = document.getElementById('popup');
  var btsi = document.getElementById('idyessa');
  var btno = document.getElementById('idno');
  popup.style.display="block";
  btno.onclick = function() {
    popup.style.display="none";
      return;
  }
  btsi.onclick = function() {
    popup.style.display="none";
    var ric = new XMLHttpRequest();
    arg = document.getElementById("arg");
    ric.open("POST", "delete/delTerm.php", true);
    ric.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ric.send("idt="+encodeURIComponent(idt));
    ric.onreadystatechange = function() {
      if (this.readyState != 4 || this.status != 200)
        return;

      getTerm(coda,argomento);// Ricarico elenco termini
    }
    return "Caricamento..."; 
  }
}