# Glossario
Pagine web che mostrano le definizioni di termini su argomenti specifici, in diverse materie scolastiche.
Questo progetto è nato per studiare i database relazionali e i linguaggi di programmazione PHP e JavaScript.

## Front End
Questa è la parte visibile direttamente all'utente. Consente semplicemente di interagire coi contenuti visualizzandoli.
Ogni contenuto può essere filtrato velocemente tramite apposita barra ricerca.

<ul>
<li>Cliccando su una materia verranno mostrati gli argomenti ad essa associata</li>
<li>Cliccando su un argomento verranno mostrati i termini ad esso associati</li>
<li>Cliccando su un termine sarà possibile visualizzarne la definizione</li>
</ul>

## Back End
Questa è la parte visibile all'amministratore. Consente di modificare, aggiungere, rimuovere ogni contenuto.
Un utente di test è già memorizzato nel database.

<b>Username = prova</b><br>
<b>Password = prova</b>

##### Note sulla gestione del database
<ul>
<li>Eliminando una materia verranno eliminati anche tutti gli argomenti e i termini ad essa associata</li>
<li>Eliminando un argomento verranno rimossi anche tutti i termini ad esso associato, ma non la materia a cui l'argomento era collegato</li>
<li>Eliminando un termine verrà rimossa solo la sua definizione</li>
<li>La password dell'utente viene criptata in MD5 per aumentare la sicurezza</li>
</ul>
