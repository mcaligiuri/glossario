// Cancellazione materie con argomenti e termini
function delMat(idm)
{
    // Popup
    var popup = document.getElementById('popup');
    var btsi = document.getElementById('idyessa');
    var btno = document.getElementById('idno');
    popup.style.display="block";
    btno.onclick = function()
    {
        popup.style.display="none";
        return;
    }
    btsi.onclick = function() 
    {
        popup.style.display="none";
        var ric = new XMLHttpRequest();
        ric.open("GET", "delete/delMat.php?idm="+idm, true);
        ric.send();
        ric.onreadystatechange = function() 
        {
            if (this.readyState != 4 || this.status != 200)
                return;

            getMaterie();// Ricarico elenco materie
        }
        return "Caricamento..."; 
    }
}

function delArg(ida,codm,materia)
{
    // Popup
    var popup = document.getElementById('popup');
    var btsi = document.getElementById('idyessa');
    var btno = document.getElementById('idno');
    popup.style.display="block";
    btno.onclick = function()
    {
        popup.style.display="none";
        return;
    }
    btsi.onclick = function() 
    {
        popup.style.display="none";
        var ric = new XMLHttpRequest();
        arg = document.getElementById("arg");
        ric.open("GET", "delete/delArg.php?ida="+ida, true);
        ric.send();
        ric.onreadystatechange = function() 
        {
            if (this.readyState != 4 || this.status != 200)
                return;
            
            getArg(codm,materia);// Ricarico elenco argomenti
        }
        return "Caricamento..."; 
    }
}

function delTerm(idt,coda,argomento)
{
    // Popup
    var popup = document.getElementById('popup');
    var btsi = document.getElementById('idyessa');
    var btno = document.getElementById('idno');
    popup.style.display="block";
    btno.onclick = function()
    {
        popup.style.display="none";
        return;
    }
    btsi.onclick = function() 
    {
        popup.style.display="none";
        var ric = new XMLHttpRequest();
        arg = document.getElementById("arg");
        ric.open("GET", "delete/delTerm.php?idt="+idt, true);
        ric.send();
        ric.onreadystatechange = function() 
        {
            if (this.readyState != 4 || this.status != 200)
                return;
            
            getTerm(coda,argomento);// Ricarico elenco termini
        }
        return "Caricamento..."; 
    }
}