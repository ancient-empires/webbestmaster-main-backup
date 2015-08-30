<?php

require 'class.phpmailer.php';

$title = $_POST['title'];
$content = $_POST['content'];
$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
$email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
$phone = substr(htmlspecialchars(trim($_POST['tel'])), 0, 100);//    'phone'   => '28071985',
$extra = $_POST['extra'];
$works_type = $_POST['works-type'];

$mail = new PHPMailer();
$mail->CharSet = 'utf-8';
$mail->From = 'arthata.by';      // îò êîãî
$mail->FromName = 'arthata.by';   // îò êîãî
$mail->AddAddress('web.best.master@gmail.com', 'arthata.by'); // êîìó - àäðåñ, Èìÿ
//$mail->AddAddress('arthataby@gmail.com', 'arthata.by'); // êîìó - àäðåñ, Èìÿ
$mail->IsHTML(true);        // âûñòàâëÿåì ôîðìàò ïèñüìà HTML
$mail->Subject = $title;  // òåìà ïèñüìà

$mail->Body = 'title - '.$title.'<br/ >name - '.$name.'<br/ >phone - '.$phone.'<br/ >email - '.$email.'<br/ >content - '.$content.'<br />extra - '.$extra.'<br />works-type - '.$works_type;

// add attachment
// åñëè áûëî èçîáðàæåíèå/èÿ, òî ïðèêðåïëÿåì åãî â âèäå êàðòèíêè ê òåëó ïèñüìà.
foreach($_FILES as $file) {
    $mail->AddAttachment($file['tmp_name'], $file['name']);
}

//$mail->AddAttachment($_FILES['file_1']['tmp_name'], $_FILES['file_1']['name']);






// îòïðàâëÿåì íàøå ïèñüìî
//if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);
//echo 'Spasibo! Vash zakaz prinyat.';

// îòïðàâëÿåì íàøå ïèñüìî
echo 'status:';
echo $mail->Send();
echo ';';


//$roistatData = array(
//    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
//    'key'     => 'NjMzNDo3MDAwOjliZTZhYjdiMzgxMTM1NjE1NWJkMGQ3NTliYjkxMDU1', // Çàìåíèòå SECRET_KEY íà ñåêðåòíûé êëþ÷ èç ïóíêòà ìåíþ Íàñòðîéêè -> Èíòåãðàöèÿ ñî ñäåëêàìè â íèæíåé ÷àñòè ýêðàíà è ñòðî÷êå Êëþ÷ äëÿ èíòåãðàöèé
//    'title'   => $title,
//    'comment' => $content,
//    'name'    => $name,
//    'email'   => $email,
//    'phone'   => $phone,
//    'fields'  => array()
//);

//echo file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?".http_build_query($roistatData));


?>