function getElem(val) 
{
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