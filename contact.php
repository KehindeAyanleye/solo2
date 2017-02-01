<?php
<<<<<<< HEAD
=======

>>>>>>> 64bc0ab6ae6072f0214587e49b516a2469a4ebf2
if(isset($_POST['submit']))
{
  $date = date('d-m-Y');
  $name = $_POST['name'];
  $mobile = $_POST['mobile'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $send = "Name: " . $name . "\n\n";
<<<<<<< HEAD
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
=======
  $send .= "Telephone: " . $mobile . "\n\n";
  $send .= "Email: " . $email . "\n\n";
  $send .= "Message: " . $message . "\n\n";
  $send .= "Date: " . $date . "\n\n";
  
  $subject = "Enquiry";
  $to = 'info@whitebricks.com';
  $headers = "From: enquiries@whitebricks.com\r\n";
  if(mail($to, $subject, $send, $headers))
  {
    header('Location: index.html');
  }

}

?>
>>>>>>> 64bc0ab6ae6072f0214587e49b516a2469a4ebf2
