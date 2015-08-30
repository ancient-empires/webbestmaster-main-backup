<link rel="stylesheet" type="text/css" href="../themes/Arthata/css/image-upload.css">
<?php
function show_form()
{
?>
<p>
<form action="" method=post onsubmit="yaCounter22169560.reachGoal('skinali_confirm'); return true;" enctype="multipart/form-data">
              <div align="center">
              Имя<br />
              <input type="text" value="Гость" name="name" size="40">
              <br />Номер телефона*<br />
              <input type="text"  value="+375" name="tel" size="40">
              <br /><br />Укажите ваш адрес<br />
              <textarea rows="5" name="mess" cols="40"></textarea>
              <br /><br /><input class="button" type="submit" value="Заказать замер" name="submit"><br />
              </div>
</form>
</p>
<?
}

function complete_mail() {
        // $_POST['title'] содержит данные из поля "Тема", trim() - убираем все лишние пробелы и переносы строк, htmlspecialchars() - преобразует специальные символы в HTML сущности, будем считать для того, чтобы простейшие попытки взломать наш сайт обломались, ну и  substr($_POST['title'], 0, 1000) - урезаем текст до 1000 символов. Для переменных $_POST['mess'], $_POST['name'], $_POST['tel'], $_POST['email'] все аналогично
        $_POST['title'] =  substr('Замер скинали', 0, 1000);
        $_POST['mess'] =  substr(htmlspecialchars(trim($_POST['mess'])), 0, 1000000);
        $_POST['name'] =  substr(htmlspecialchars(trim($_POST['name'])), 0, 30);
        $_POST['tel'] =  substr(htmlspecialchars(trim($_POST['tel'])), 0, 30);
        $_POST['menu'] =  substr(htmlspecialchars(trim($_POST['menu'])), 0, 50);
        // если не заполнено поле "Телефон" - показываем ошибку 0
        if (empty($_POST['tel']))
             output_err(0);
        // обратите внимание, теперь мы можем писать красивые письма, с помощью html тегов ;-)
        $mess = '
<b>Имя отправителя:</b>'.$_POST['name'].'<br />
<b>Контактный телефон:</b>'.$_POST['tel'].'<br />
'.$_POST['mess'];

        // подключаем файл класса для отправки почты
        require 'class.phpmailer.php';

        $mail = new PHPMailer();
        $mail->From = 'arthata.by';      // от кого
        $mail->FromName = 'arthata.by';   // от кого
        $mail->AddAddress('arthataby@gmail.com', 'arthata.by'); // кому - адрес, Имя
        $mail->IsHTML(true);        // выставляем формат письма HTML
        $mail->Subject = $_POST['title'];  // тема письма

        // если было изображение, то прикрепляем его в виде картинки к телу письма.
        $mail->Body = $mess;

        // отправляем наше письмо
        if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);
        echo 'Spasibo! Vash zakaz prinyat.';
}

function output_err($num)
{
    $err[0] = 'ОШИБКА! Не введен телефон.';
    echo '<p>'.$err[$num].'</p>';
    show_form();
    exit();
}

if (!empty($_POST['submit'])) complete_mail();
else show_form();










$roistatData = array(
    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
    'key'     => 'NjMzNDo3MDAwOjliZTZhYjdiMzgxMTM1NjE1NWJkMGQ3NTliYjkxMDU1', // Замените SECRET_KEY на секретный ключ из пункта меню Настройки -> Интеграция со сделками в нижней части экрана и строчке Ключ для интеграций
    'title'   => 'Заказ скинали',
    'comment' => 'I like to leave comments',
//    'name'    => substr(htmlspecialchars(trim($_POST['name'])), 0, 30),    'name'    => 'Iwanttobe',
    'email'   => 'web.best.master@gmail.com',
    'phone'   => substr(htmlspecialchars(trim('28071985280719852807198528071985')), 0, 30),//    'phone'   => '28071985',
    'fields'  => array()
);
echo "https://cloud.roistat.com/api/proxy/1.0/leads/add?".http_build_query($roistatData);
file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?".http_build_query($roistatData));

?> 
