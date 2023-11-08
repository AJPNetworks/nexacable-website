<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

function sendMail($to, $from, $fromName, $replyTo, $subject, $body) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'mail.ajp.network';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'noreply@ajp.network';
        $mail->Password   = '[REDACTED]';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom($from, $fromName);
        $mail->addAddress($to);
        $mail->addReplyTo($replyTo);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data)) {

    $name = $data["name"];
    $email = $data["email"];
    $phone = $data["phone"];
    $message = $data["message"];

    // Checks for valid email
    if(!preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email)) {
        echo json_encode(["message" => "Invalid Email"]);
        exit;
    }

    if(empty($phone)) {
        $phone = "Not Provided";
    }

    $body = "<html>Name: $name<br>Email: <a href='mailto:$email'>$email</a><br>Phone: <a href='tel:$phone'>$phone</a><br>Message: $message</html>";

    $sendToAJP = sendMail('contact@ajp.network', 'noreply@ajp.network', 'Contact Form Mailer', $email, 'Contact from ' . $name, $body);
    $sendToSender = sendMail($email, 'noreply@ajp.network', 'AJP Networks LLC', 'contact@ajp.network', 'We Recieved Your Message', $body);


    if ($sendToAJP && $sendToSender) {
        echo json_encode(["message" => "Form submitted successfully!"]);
    } else {
        echo json_encode(["message" => "Form failed to submit"]);
    }

} else {
    echo json_encode(["message" => "No data provided"]);
}
?>
