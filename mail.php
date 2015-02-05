<?php
require 'PHPMailer/PHPMailerAutoload.php';
 
$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                       // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'bisantyum@gmail.com';     // SMTP username
$mail->Password = 'Dertyu765';                        // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
$mail->Port = 587;                                    //Set the SMTP port number - 587 for authenticated TLS

$mail->From = $_POST['email'];
$mail->FromName = $_POST['name'];

$mail->addAddress('danielmapar@gmail.com', 'Daniel Parreira');     // Add a recipient                                 
 
$mail->Subject = "BISANTYUM - Website Form";
$mail->Body    = $_POST['name'] . "(" . $_POST['email'] . ")<br/>" . $_POST['message'];
$mail->AltBody = $_POST['message'];
$mail->isHTML(true);                                  // Set email format to HTML

if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}

?>