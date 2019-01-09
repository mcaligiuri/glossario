// Apro menù mobile
function apri()
{
    var mnu,mat;
    mat = document.getElementById("mat");
    mnu = document.getElementById("mnu");
    mat.style.width = "250px";
    mnu.style.display = "none";
}

// Chiudo menù mobile
function chiudi()
{
    mat = document.getElementById("mat");
    mnu = document.getElementById("mnu");

    if(window.matchMedia("(max-width: 800px)")) 
    {
        mat.style.width = "0px"
        mnu.style.display = "block";
    }
}

// Mostro e nascondo al click del
// pulsante indietro
function showTerm()
{
    var def,term;
    def = document.getElementById("cont");
    term = document.getElementById("term");

    def.style.display = "none";
    term.style.display = "block";
}

function showArg()
{
    var ter,arg;
    ter = document.getElementById("term");
    arg = document.getElementById("arg");

    ter.style.display = "none";
    arg.style.display = "block";
}