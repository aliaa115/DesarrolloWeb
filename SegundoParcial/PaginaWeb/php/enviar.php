<?php

$nombre = $_POST["nombre"];
$tel = $_POST["telefono"];
$mail = $_POST["mail"];
$mensaje = $_POST["body"];

$header = "From: " . $nombre . "<" . $mail . "> \r\n";
$header .= "content-type: text/html\r\n";

$mensaje = "<p>Este mensaje fue enviado por " . $nombre . " ( " . $tel . " ) " . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $mensaje . " \r\n";
$mensaje .= "</p>";

$para = "aliaabril@gmail.com";
$asunto = "contacto desde CV";

mail($para, $asunto, $mensaje, $header);

header("Location: index.html?mailsend");

?>