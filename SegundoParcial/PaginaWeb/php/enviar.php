<?php
$namein = $_POST['nombre'];
$emailin = $_POST['mail'];
$telefono = $_POST['telefono'];
$messagein = $_POST['body'];

if (!empty($namein)||!empty($emailin)||!empty($subin)||!empty($messagein)){
    $host = '127.0.0.1';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'contactoMySQL';

    $conn = new mysqli($host,$dbUsername, $dbPassword, $dbName);
    if(mysqli_connect_error())
    {
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    }else
    {
        $SELECT = "SELECT nombre From interesados Where nombre= ? Limit 1";
        $INSERT = "INSERT Into interesados (nombre, correo, telefono, mensaje) values (?,?,?,?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param('s',$namein);
        $stmt->execute();
        $stmt->bind_result($namein);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param('ssss',$namein,$emailin,$telefono,$messagein);
            $stmt->execute();
            header("Location: index.html");
       
        $stmt->close();
        $conn->close();
    }
}else
{
    echo "Llene los campos...";
    die();
}
?>