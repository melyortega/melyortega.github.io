<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST');
    //ini_set( 'display_errors', 1 );
    //error_reporting( E_ALL );
    $from = "info@koworkar.tk";
    $to = "info@koworkar.tk";
    $subject = "Cliente";
    $message = $_POST['mail'].":".$_POST['mensaje'];
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "Listo";
?>