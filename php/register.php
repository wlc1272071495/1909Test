<?php
    @require_once("common.php");  //引入外部php

    $phone=$_GET["phone"];
    $pwd=$_GET["pwd"];

    //先判断注册的手机号是否存在

    $search_str="SELECT * FROM `kaola_userinfo` where phone='$phone';";

    $result=mysql_query($search_str);

    $item=mysql_fetch_assoc($result);

    // print_r($item);

    // echo json_encode($item);

    $msg=array();
    if($item){
        $msg["status"]=false;

        $msg["msg"]="该手机号已存在";
    }else{
        $insert_str="INSERT INTO `kaola_userinfo`(password,phone) values('$pwd','$phone')";

        mysql_query($insert_str);

        $row = mysql_affected_rows(); //  $row>0  ,$row==0 , $row==-1   //语法问题

        if($row > 0){
            $msg["status"]=true;
            $msg["msg"]="注册成功";
        }
    }

    echo json_encode($msg) ;
    




?>