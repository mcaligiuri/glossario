// Eseguo inserimenti nel database richiamando le specifiche pagine php in background

// Materie
function insMat()
{
    var mat = document.getElementById("insmat").value;
    if(mat == "")
        return;
    var div = document.getElementById("mat");
    var ric = new XMLHttpRequest();

    ric.open("GET", "insert/insMat.php?mat="+mat, true);
    ric.send();
    
    ric.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200)
            div.innerHTML = getMaterie();
    } 
}
// Argomenti
function insArg(codm,mat)
{
    var arg = document.getElementById("insarg").value;
    if(arg == "")
        return;
    var div = document.getElementById("arg");
    var ric = new XMLHttpRequest();

    ric.open("GET", "insert/insArg.php?arg="+arg+"&codm="+codm, true);
    ric.send();
    
    ric.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200)
            div.innerHTML = getArg(codm,mat);
    } 
}
// Termini
function insTerm(coda,arg)
{
    var tit = document.getElementById("insterm").value;
    var def = document.getElementById("insdef").value;
    if(tit == "" || def == "")
        return;
    var div = document.getElementById("ter");
    var ric = new XMLHttpRequest();

    ric.open("GET", "insert/insTerm.php?term="+tit+"&def="+def+"&coda="+coda, true);
    ric.send();
    
    ric.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200)
            div.innerHTML = getTerm(coda,arg);
    } 
}