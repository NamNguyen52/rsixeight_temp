<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = $name;
$email_subject = $subject;
$email_body = $message;

$to = 'namnguyen@r68.co';
$headers = 'From: $email_from \r\n';

mail($to, $email_subject, $email_body, $headers);
?>