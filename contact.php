<?php

if(isset($_POST['submit']))
{
  $date = date('d-m-Y');
  $name = $_POST['name'];
  $mobile = $_POST['mobile'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $send = "Name: " . $name . "\n\n";
  $send += "Telephone: " . $mobile . "\n\n";
  $send += "Email: " . $email . "\n\n";
  $send += "Message: " . $message . "\n\n";
  $send += "Date: " . $date . "\n\n";
  
  $subject = "Enquiry";
  $to = 'info@whitebricks.com';
  if(mail($to, $subject, $send))
  {
    header('Location: index.html');
  }

}

?>
