<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: web';
    $to = 'michaelrobertsutton@gmail.com';
    $subject = 'Hello';
    $human = $_POST['human'];

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit'] && $human == '' && $message != '' ) {
        if (mail ($to, $subject, $body, $from)) {
	    echo 'Your message has been sent!';
		} else {
		echo 'Something went wrong, go back and try again!';
		}
		} else if ($_POST['submit'] && $message == '') {
		echo 'You forgot to fill out the message!';
		}
?>