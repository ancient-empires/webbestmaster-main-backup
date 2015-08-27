<?php

require 'class.phpmailer.php';

$title = $_POST['title'];
$content = $_POST['content'];
$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
$email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
$phone = substr(htmlspecialchars(trim($_POST['tel'])), 0, 100);//    'phone'   => '28071985',

$mail = new PHPMailer();
$mail->From = 'arthata.by';      // от кого
$mail->FromName = 'arthata.by';   // от кого
$mail->AddAddress('web.best.master@gmail.com', 'arthata.by'); // кому - адрес, Имя
//$mail->AddAddress('arthataby@gmail.com', 'arthata.by'); // кому - адрес, Имя
$mail->IsHTML(true);        // выставляем формат письма HTML
$mail->Subject = $title;  // тема письма

$mail->Body = 'title - '.$title.'<br/ >name - '.$name.'<br/ >phone - '.$phone.'<br/ >email - '.$email.'<br/ >content - '.$content.'<br />';

// add attachment
// если было изображение/ия, то прикрепляем его в виде картинки к телу письма.
foreach($_FILES as $file) {
    $mail->AddAttachment($file['tmp_name'], $file['name']);
}

//$mail->AddAttachment($_FILES['file_1']['tmp_name'], $_FILES['file_1']['name']);






// отправляем наше письмо
//if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);
//echo 'Spasibo! Vash zakaz prinyat.';

// отправляем наше письмо
echo 'status:';
echo $mail->Send();
echo ';';

$roistatData = array(
    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
    'key'     => 'NjMzNDo3MDAwOjliZTZhYjdiMzgxMTM1NjE1NWJkMGQ3NTliYjkxMDU1', // Замените SECRET_KEY на секретный ключ из пункта меню Настройки -> Интеграция со сделками в нижней части экрана и строчке Ключ для интеграций
    'title'   => $title,
    'comment' => $content,
    'name'    => $name,
    'email'   => $email,
    'phone'   => $phone,
    'fields'  => array()
);

//echo "https://cloud.roistat.com/api/proxy/1.0/leads/add?".http_build_query($roistatData);
echo file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?".http_build_query($roistatData));

?>