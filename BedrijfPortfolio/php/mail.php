<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "abdad1997@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
if(isset($_POST['interested'])) { // honey pot check
    die();
} else {
    function is_valid_email($email) {
            return preg_match('#^[a-z0-9.!\#$%&\'*+-/=?^_`{|}~]+@([0-9.]+|([^\s]+\.+[a-z]{2,6}))$#si', $email);
        }
            if (!is_valid_email($email)) {
              echo 'Sorry, invalid email';
              exit;
        }
            mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
            header("location: http://www.core-code.nl");
}
?>