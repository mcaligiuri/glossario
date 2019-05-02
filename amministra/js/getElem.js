// Richiamo materie
function getMaterie()
{
    chiudi();
    var arg,ter,def;
    arg = document.getElementById('arg');
    ter = document.getElementById('ter');
    def = document.getElementById('def');
    if(arg.style.display=="block"||ter.style.display=="block")
    {
        arg.style.display="none";
        ter.style.display="none";
        def.style.display="none";
    }
    var mat = document.getElementById("mat");
    mat.style.display="block";
    var ric = new XMLHttpRequest();

    ric.open("GET", "select/selMat.php", true);
    ric.send();
    
    ric.onreadystatechange = function() 
    {
        if (this.readyState != 4 || this.status != 200)
            return;

        mat.innerHTML = ric.responseText;
    }
    return "Caricamento..."; 
}
// Richiamo argomenti
function getArg(codm,mat)
{
    var arg;
    arg = document.getElementById("arg");
    arg.style.display = "block";
    document.getElementById('mat').style.display="none";
    var ric = new XMLHttpRequest();

    ric.open("GET", "select/selArg.php?codm=" + codm + "&mat=" + mat, true);
    ric.send();
    
    ric.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200)
            arg.innerHTML = this.responseText;
    } 
    return "Caricamento...";
}
// Richiamo termini
function getTerm(coda,arg)
{
    document.getElementById('arg').style.display="none";
    var ter = document.getElementById("ter");
    ter.style.display = "block";
    var ric = new XMLHttpRequest();

    ric.open("GET", "select/selTerm.php?coda="+coda+"&arg="+arg, true);
    ric.send();
    
    ric.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200)
            ter.innerHTML = ric.responseText;
    }
    return "Caricamento...";
}
// Richiamo definizioni
function getDef(idt,coda,arg)
{
    document.getElementById('ter').style.display="none";
    var def = document.getElementById("def");
    def.style.display="block";
    var ric = new XMLHttpRequest();

    ric.open("GET", "select/selDef.php?idt="+idt+"&coda="+coda+"&arg="+arg, true);
    ric.send();
    
    ric.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200)
            def.innerHTML = ric.responseText;
    } 
}
// Mostro nascondo div 
function showArg()
{
    document.getElementById('ter').style.display = "none";
    document.getElementById('arg').style.display = "block";
}

function showTer()
{
    document.getElementById('def').style.display = "none";
    document.getElementById('ter').style.display = "block";
}