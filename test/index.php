<?php

ini_set('display_errors', 1);

//подкючаем классы
require_once "controller/tenderController.php";
require_once "model/tenderModel.php";

$query = (isset($_POST['data']))?$_POST['data']:null; //проверяем есть ли входные параметры

$tender = new tenderController($query);
$tender -> run();
