<?php

// Define some constants
define( "RECIPIENT_EMAIL", "info@rsixeight.com");

// Read the form values
$message = "From: " . $_POST['senderName'] . "\nEmail: " . $_POST['senderEmail'] . "\nSubject: " . $_POST['senderSubject'] . "\nMessage: " . $_POST['message'];
$subject = 'Website Contact Request'; 

$recipient = RECIPIENT_EMAIL;
$headers = "From: Webmaster@rsixeight.com";
mail( $recipient, $subject, $message, $headers );
header('Location: http://www.r6ixei8ht.com/index.html'); 

?>