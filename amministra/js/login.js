// Gestione errori o accesso login a seconda della risposta della pagina php
// 21-05-2026 introdotto token per prevenire attacchi CSRF
async function setLogin() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const csrf = document.querySelector('input[name="csrf_token"]').value;
  const form = document.getElementById("form");
  const warn = document.getElementById("msg");

  try {
    const par = new URLSearchParams();
    par.append("user",user);
    par.append("pass",pass);
    par.append("csrf_token",csrf);

    const login = await fetch("../login/login.php",{
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: par,
    });
    if (login.ok) {
      const esito = await login.text();
      switch(esito) {
        case "1":
          form.style.backgroundColor = "red";
          document.getElementById("user").style.backgroundColor ="red";
          document.getElementById("pass").style.backgroundColor ="red";
          warn.innerHTML = "CREDENZIALI NON VALIDE";
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
          warn.innerHTML = "CREDENZIALI NON VALIDE";
          break;
        case "4":
          form.style.backgroundColor = "orange";
          document.getElementById("user").style.backgroundColor ="orange";
          document.getElementById("pass").style.backgroundColor ="orange";
          warn.innerHTML = "Troppi tentativi di accesso, riprova tra 15 minuti.";
          break;
      }
    }
    else{
     console.error("Errore nella richiesta di login."); 
    }
  }
  catch(errore){
    console.error("Si è verificato un problema nella login:", errore); 
  }
}
 
// Azzero i campi
function resetForm() {
  const user = document.getElementById("user");
  const pass = document.getElementById("pass");
  const form = document.getElementById("form");
  const warn = document.getElementById("msg");  
  form.style.backgroundColor = "#f2f2f2";
  user.style.backgroundColor = "#f2f2f2";
  pass.style.backgroundColor = "#f2f2f2";
  warn.innerHTML = "";
}