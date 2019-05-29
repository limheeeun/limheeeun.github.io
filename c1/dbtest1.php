<?php
    echo "Apache+PHP+MySQL Testing<br>";
    $db = mysqli_connect("localhost", "root","1234", "alreadysliver");
    if($db){
        echo "성공적으로 연결되었습니다.<br>";
    } else {
        echo "연결이 실패하였습니다.<br>";
    }
    $res = mysqli_query($db, 'SELECT VERSION() as VERSION');
    $data = mysqli_fetch_assoc($res);
    echo $data['VERSION'];
?>