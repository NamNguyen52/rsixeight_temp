<?php

// Define some constants
define( "RECIPIENT_NAME", "Nam Nguyen" );
define( "RECIPIENT_EMAIL", "namnguyen@rsixeight.com" );

// Read the form values

$senderName = $_POST['senderName']; 
$senderEmail = $_POST['senderEmail'];
$message = $_POST['message'];
$subject = $_POST['senderSubject']; 

// If all values exist, send the email
if ( $senderName && $senderEmail && $message ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderName . " <" . $senderEmail . ">";
  mail( $recipient, $subject, $message, $headers );
  header('Location: localhost:8000/custom_index.html'); 
}

?>