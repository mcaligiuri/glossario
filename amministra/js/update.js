function getForm(id,tipo,nome,codm)
{
    var div = document.getElementById(tipo);
    var ric = new XMLHttpRequest();
    var par;
    if(tipo == "arg")
        par = "update/updForm.php?id="+id+"&tipo="+tipo+"&nome="+nome+"&codm="+codm;
    else
        par = "update/updForm.php?id="+id+"&tipo="+tipo+"&nome="+nome;
    
    ric.open("GET",par, true);
    ric.send();
    
    ric.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200)
            div.innerHTML = this.responseText;
    } 
}
function updMA(id,tipo,nome,codm)
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
        var par,div,data;
        div = document.getElementById(tipo);
        data=document.getElementById("txtupd").value;
        if (tipo == "mat")
            par = "update/updMat.php?idm="+id+"&mat="+data;
        else
            par = "update/updArg.php?codm="+id+"&arg="+data;
        
        var ric = new XMLHttpRequest();
        ric.open("GET", par, true);
        ric.send();
        ric.onreadystatechange = function() 
        {
            if (this.readyState != 4 || this.status != 200)
                return;

            if(tipo == "mat")
                div.innerHTML = getMaterie();
            else
                div.innerHTML = getArg(codm,nome);
        }
    }
}

function updTerm(idt,coda,arg)
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
        var div = document.getElementById("ter");
        var ric = new XMLHttpRequest();
        var term = document.getElementById("termt").value;
        var def = document.getElementById("termdef").value;
        ric.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200)
            {
                div.innerHTML = getTerm(coda,arg);
                document.getElementById("def").style.display="none";
            }
        }
        ric.open("GET", "update/updTerm.php?idt="+idt+"&coda="+coda+"&term="+term+"&def="+def , true);
        ric.send();
    }
}

// Apro menù mobile
function apri()
{
    var nav;
    nav = document.getElementById("nav");
    mnu = document.getElementById("btnmnu");
    nav.style.width = "250px";
    mnu.style.display = "none";
}

// Chiudo menù mobile
function chiudi()
{
    nav = document.getElementById("nav");
    mnu = document.getElementById("btnmnu");

    if(window.matchMedia("(max-width: 800px)")) 
    {
        nav.style.width = "0px"
        mnu.style.display = "block";
    }
}