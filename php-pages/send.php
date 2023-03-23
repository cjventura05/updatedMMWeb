<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../phpmailer/src/Exception.php';
require '../phpmailer/src/PHPMailer.php';
require '../phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'mastermovers.career@gmail.com'; //your gmail email
    $mail->Password = 'buodawwnvsfoyvpz'; //Gmail App password here
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom($_POST["email"]); //Your Gmail email

    $mail->addAddress('mastermovers.career@gmail.com');

    $mail->Subject = "Message from MasterMovers Website: " . $_POST["email"];
    $mail->Body = $_POST["message"];

    $mail->send();

    echo
    "
    <script>
    alert('Sent Successfully');
    document.location.href = 'contact.php';
    </script>
    ";
    

}

?>