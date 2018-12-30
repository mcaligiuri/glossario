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