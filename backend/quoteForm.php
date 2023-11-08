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
    $company = $data["company"];
    $budget = $data["budget"];
    $serviceType = $data["serviceType"];
    $customServiceType = $data["customServiceType"];
    $message = $data["message"];

    if($serviceType == "other") {
        $serviceType = $customServiceType;
    }

    // Checks for valid email
    if(!preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email)) {
        echo json_encode(["message" => "Invalid Email"]);
        exit;
    }

    $bodyToAJP = getEmailToAJP($name, $email, $phone, $company, $budget, $serviceType, $message);
    $bodyToSender = getEmailConfirmation($name, $email, $phone, $company, $budget, $serviceType, $message);

    $sendToAJP = sendMail('contact@ajp.network', 'noreply@ajp.network', 'Quote Request Mailer', $email, 'Personalizd Quote Requested from ' . $name, $bodyToAJP);

    $sendToSender = sendMail($email, 'noreply@ajp.network', 'AJP Networks LLC', 'contact@ajp.network', 'We Recieved Your Quote Request', $bodyToSender);


    if ($sendToAJP && $sendToSender) {
        echo json_encode(["message" => "Form submitted successfully!"]);
    } else {
        echo json_encode(["message" => "Form failed to submit"]);
    }

} else {
    echo json_encode(["message" => "No data provided"]);
}

function getEmailConfirmation($name, $email, $phone, $company, $budget, $serviceType, $message) {

    return("
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>AJP Networks LLC: Quote Request Confirmation</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                background-color: #d4d4d4;
            }
            .container {
                background-color: #ffffff;
                max-width: 750px;
                padding: 20px 50px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }
            .logo-wrapper {
                text-align: center;
            }
            .logo {
                max-height: 150px;
                margin-bottom:20px;
                border-radius: 10px;
            }
            .header {
                color: #2c3e50;
                font-size: 24px;
                margin-bottom: 25px;
            }
            .sub-header {
                font-size: 18px !important;
            }
            .info-item {
                margin: 10px 0;
            }
            .body-footer {
                text-align: center;
                color: #2c3e50;
            }
            .footer, .footer-text {
                text-align: center;
                max-width: 750px;
                padding: 10px 50px;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <strong>AJP Networks LLC: Quote Request Confirmation</strong>
                <div class='sub-header'>
                    <p class='sub-header-child'>Thanks for contacting AJP Networks!  This email signifies that we recieved your message and we are working on a quote that fits your needs best.  Please allow up to 3-5 business days for a reply back via email.</p>
                    <p class='sub-header-child'>As a confirmation, heres the info you provided to us:</p>
                </div>
            </div>
            <ul>
                <li class='info-item'>Name: $name</li>
                <li class='info-item'>Email: $email</li>
                <li class='info-item'>Phone Number: $phone</li>
                <li class='info-item'>Company: $company</li>
                <li class='info-item'>Budget: $budget</li>
                <li class='info-item'>Service Type: $serviceType</li>
                <li class='info-item'>Message: $message</li>
            </ul>
            <br>
            <div class='logo-wrapper'>
                <img class='logo' src='https://ajp.network/logoBanner.png' alt='AJP Networks LLC Logo and Banner'>
            </div>
            <p class='body-footer'>If you need any further help, you may reply to this email or contact us at <a href='mailto:contact@ajp.network'>contact@ajp.network</a></p>
        </div>
        <div class='footer'></div>
            <p class='footer-text'>This email was sent to $email in regards to a quote you requested from us.  We respect your privacy, the information you provided to us will not be used for analytical or promotional purposes.  We use the information in order to provide a personalized quote for you.</p>
            <p class='footer-text'>Copyright &copy; 2023 AJP Networks LLC | All Rights Reserved.</p>
        </div>
    </body>
    </html>

    ");
}




function getEmailToAJP($name, $email, $phone, $company, $budget, $serviceType, $message) {

    return("
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Quote Requested From $name</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
                background-color: #d4d4d4;
            }
            .container {
                background-color: #ffffff;
                max-width: 750px;
                padding: 20px 50px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            }
            .logo-wrapper {
                text-align: center;
            }
            .logo {
                max-height: 150px;
                margin-bottom:20px;
                border-radius: 10px;
            }
            .header {
                color: #2c3e50;
                font-size: 24px;
                margin-bottom: 25px;
            }
            .sub-header {
                font-size: 18px !important;
            }
            .info-item {
                margin: 10px 0;
            }
            .body-footer {
                text-align: center;
                color: #2c3e50;
            }
            .footer, .footer-text {
                text-align: center;
                max-width: 750px;
                padding: 10px 50px;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <strong>Quote Requested From $company</strong>
                <div class='sub-header'>
                    <p class='sub-header-child'>$name from $company requested a personalized quote!</p>
                    <p class='sub-header-child'>Below is the information they provided:</p>
                </div>
            </div>
            <ul>
                <li class='info-item'>Name: $name</li>
                <li class='info-item'>Email: $email</li>
                <li class='info-item'>Phone Number: $phone</li>
                <li class='info-item'>Company: $company</li>
                <li class='info-item'>Budget: $budget</li>
                <li class='info-item'>Service Type: $serviceType</li>
                <li class='info-item'>Message: $message</li>
            </ul>
            <br>
            <div class='logo-wrapper'>
                <img class='logo' src='https://ajp.network/logoBanner.png' alt='AJP Networks LLC Logo and Banner'>
            </div>
            <p class='body-footer'>Please Respond back within 3-5 business days</p>
        </div>
        <div class='footer'></div>
            <p class='footer-text'>Copyright &copy; 2023 AJP Networks LLC | All Rights Reserved.</p>
        </div>
    </body>
    </html>

    ");
}