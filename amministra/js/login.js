function setLogin()
{
    var user, pass,form,warn;
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    form = document.getElementById("form");
    warn = document.getElementById("msg");

    // Per i browser che non supportano l'attributo required
    if(user == "" || pass == "")
    {
        form.style.backgroundColor = "red";
        document.getElementById("user").style.backgroundColor ="red";
        document.getElementById("pass").style.backgroundColor ="red";
        warn.innerHTML = "COMPILA TUTTI I CAMPI";
        return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState != 4 && this.status != 200)
            return;
        
        var esito = xhttp.responseText;
        switch(esito)
        {
            case "1":
                form.style.backgroundColor = "red";
                document.getElementById("user").style.backgroundColor ="red";
                document.getElementById("pass").style.backgroundColor ="red";
                warn.innerHTML = "UTENTE NON TROVATO";
                break;
            case "2":
                form.style.backgroundColor = "#50c878";
                document.getElementById("user").style.backgroundColor ="#50c878";
                document.getElementById("pass").style.backgroundColor ="#50c878";
                warn.innerHTML = "Accesso in corso...";
                window.location.assign("../");
                break;
            case "3":
                form.style.backgroundColor = "red";
                document.getElementById("user").style.backgroundColor ="red";
                document.getElementById("pass").style.backgroundColor ="red";
                warn.innerHTML = "PASSWORD NON VALIDA";
                break;
        }
    };
    xhttp.open("POST", "../login/login.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("user="+user+"&pass="+pass);
}

function resetForm()
{
    var user, pass,form,warn;
    user = document.getElementById("user");
    pass = document.getElementById("pass");
    form = document.getElementById("form");
    warn = document.getElementById("msg");

    form.style.backgroundColor = "#f2f2f2";
    user.style.backgroundColor = "#f2f2f2";
    pass.style.backgroundColor = "#f2f2f2";
    warn.innerHTML = "";
}