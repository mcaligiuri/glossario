function getElem(val)
{
    switch(val)
    {
        // Filtro argomenti
        case 1:
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