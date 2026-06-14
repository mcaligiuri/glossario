# Glossario

Pagine web che mostrano le definizioni di termini su argomenti specifici, in diverse materie scolastiche.
Questo progetto è nato per studiare i database relazionali e i linguaggi di programmazione PHP e JavaScript.

## Front End

Questa è la parte visibile direttamente all'utente. Consente semplicemente di interagire coi contenuti visualizzandoli.
Ogni contenuto può essere filtrato velocemente tramite l'apposita barra di ricerca.

* Cliccando su una materia verranno mostrati gli argomenti ad essa associati.
* Cliccando su un argomento verranno mostrati i termini ad esso associati.
* Cliccando su un termine sarà possibile visualizzarne la definizione.

## Back End

Questa è la parte visibile all'amministratore. Consente di modificare, aggiungere e rimuovere ogni contenuto.
Un utente di test è già memorizzato nel database. Il controllo delle credenziali funziona tramite le funzioni PHP `password_hash` e `password_verify`.

**Username:** prova  
**Password:** prova  

### Note sulla gestione del database

* Il database è stato completamente migrato su MariaDB 12.3.2.
* I dati di connessione del database sono memorizzati al percorso `dbconfig/dbconfig.php`.
* Eliminando una materia verranno eliminati anche tutti gli argomenti e i termini ad essa associati.
* Eliminando un argomento verranno rimossi anche tutti i termini ad esso associati, ma non la materia a cui l'argomento era collegato.
* Eliminando un termine verrà rimossa solo la sua definizione.
* Le tabelle hanno vincoli sull'inserimento e aggiornamento dei record, inoltre sono *case insensitive*. Esempio: inserire la materia "italiano" se è già presente "Italiano" restituirà un errore in quanto stiamo parlando della stessa materia.
