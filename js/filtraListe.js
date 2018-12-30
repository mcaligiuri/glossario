function getElem(val) {

var term,cont;
cont = document.getElementById("cont");
term = document.getElementById("term");
switch(val)
{
    // Filtro argomenti
    case 1:
    if(term.style.display == "block" || cont.style.display == "block")
    {
        term.style.display = "none";
        cont.style.display = "none";
    }

    var input, filter, a, i;
    input = document.getElementById("cerca");
    filter = input.value.toUpperCase();
    div = document.getElementById("arg");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) 
    {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) 
            a[i].style.display = "";
        else 
            a[i].style.display = "none";
    }
    break;
    // Filtro termini
    case 2:
    if(cont.style.display == "block")
        cont.style.display = "none";
    
    var input, filter, a, i;
    input = document.getElementById("cercat");
    filter = input.value.toUpperCase();
    div = document.getElementById("term");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) 
    {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) 
            a[i].style.display = "";
        else 
            a[i].style.display = "none";
    }
    break;
}
}

function setEmail()
{
    var nome,mail,ogge,mess,warn;
    nome = document.getElementById("txtnome").value;
    mail = document.getElementById("txtmail").value;
    ogge = document.getElementById("txtogg").value;
    mess = document.getElementById("txtmess").value;
    warn = document.getElementById("msg");
    // cont = document.getElementById("cont");

    if(nome == "" || mail == "" || ogge == "" || mess == "")
    {
        warn.style.color="white";
        warn.style.textAlign = "center";
        warn.innerHTML = "Devi compilare tutti i campi!";
        warn.style.backgroundColor = "red";
        return;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var esito = xmlhttp.responseText;
            switch(esito)
            {
                case 0:
                    warn.innerHTML = "Mail non inviata";
                    warn.style.textAlign = "center";
                    warn.style.backgroundColor = "red";
                    break;
                case 1:
                    warn.innerHTML = "Mail spedita, Grazie!";
                    warn.style.backgroundColor = "green";
                    warn.style.textAlign = "center";
                    break;
            }
            //cont.style.display = "block";
            //cont.innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "mail.php?nome="+ nome + "&mail=" + mail + "&ogge=" + ogge + "&mess=" + mess, true);
    xmlhttp.send();
}

function resetCampi()
{
    document.getElementById("txtnome").value="";
    document.getElementById("txtmail").value="";
    document.getElementById("txtogg").value="";
    document.getElementById("txtmess").value="";
    var warn;
    warn = document.getElementById("msg");
    if(warn.style.textAlign == "center")
    {
        warn.style.textAlign = "left";
        warn.style.color = "black";
        warn.style.backgroundColor = "#f2f2f2f2";
        warn.innerHTML = "A: Michele Caligiuri";
    }
}