<!--
 //db.php - db설정 정보
 -->
<?php
    @session_start();

    $db = new mysqli("localhost", "root", "1234", "alreadysliver");
    $db->set_charset("utf8");
    
    function mq($sql){
        global $db;
        return $db->query($sql);
    }


?>