<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['user-street'];
    $house = $_POST['user-house'];
    $block = $_POST['user-block'];
    $apartment = $_POST['user-apartment'];
    $floor = $_POST['user-floor'];
    $comment = $_POST['user-comment'];
    $pay = $_POST['pay-option'];

    $disturb = $_POST['dont-disturb']; // 1 или null 
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА'; 


    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
                <li>Дом: ' . $house . '</li>
                <li>Корпус: ' . $block . '</li>
                <li>Квартира: ' . $apartment . '</li>
                <li>Этаж: ' . $floor . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Комментарии к заказу: ' . $comment . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
            </ul>
        </body>
    </html>    
    ';


    // echo $mail_message;

    $headers = "From: Батурин Олег <obaturin@mail.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('oleg.baturin@bk.ru', 'Заказ', $mail_message, $headers);


    $data = [];
    
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);


?>