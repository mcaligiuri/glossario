<?php
if(isset($_GET['nome']) && isset($_GET['mail']) && isset($_GET['ogge']) && isset($_GET['mess']))
{
    $nome = $_GET['nome'];
    $mail = $_GET['mail'];
    $ogge = $_GET['ogge'];
    $text = $_GET['mess'];

    $to = $mail;

    $message = "
    <html>
    <head>
    <title>'$ogge'</title>
    </head>
    <body>
    <p>.'$text'.</p>
    <table>
    <tr>
    <th>$nome</th>
    </tr>
    </table>
    </body>
    </html>
    ";
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <michelecaligiuri@altervista.org>' . "\r\n";
    //headers .= 'Cc: myboss@example.com' . "\r\n";

    if (!mail($to,$ogge,$message,$headers))
    {
        $esito = 0;
        echo $esito;
    }
    else
    {
        $esito = 1;
        echo $esito;
    }
}
else
    header('Location: ./');
?>