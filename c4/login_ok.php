<?php	
    session_start();
	include "db.php";
	include "password.php";

	//POST로 받아온 아이디와 비밀번호가 비었다면 알림창을 띄우고 전 페이지로 복귀
	if($_POST["userid"] == "" || $_POST["userpw"] == ""){
		echo '<script> alert("아이디나 패스워드 입력하세요"); history.back(); </script>';
	} else {
	//password변수에 POST로 받아온 값을 암호를 저장후 데이터베이스 암호와 비교
	$password = $_POST['userpw'];
	$sql = mq("select * from mem where id='".$_POST['userid']."'");
	$member = $sql->fetch_array();
	$hash_pw = $member['pw']; 
    //$hash_pw에 POST로 받아온 아이디의 비밀번호를 저장

	if(password_verify($password, $hash_pw)) 
    //만약 password변수와 hash_pw변수가 같다면 세션값을 저장하고 로그인 처리
	{
		$_SESSION['userid'] = $member["id"];
		$_SESSION['userpw'] = $member["pw"];
        echo "<script>alert('정상적으로 로그인 되셨습니다.');
        location.href='index.html'; </script>";
		//header('Location: index.html');  
	} else { 
        // 비밀번호가 같지 않다면 알림창을 띄우고 전 페이지로 복귀
		echo "<script>alert('아이디 혹은 비밀번호를 확인하세요.'); history.back();</script>";
	}
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>로그인 처리</title>
</head>
<body>  
</body>
</html>