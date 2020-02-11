<?php


class tenderModel
{
    private $dsn;
    private $dbh;
    private $result;
    private $tenders;
//установка и настройка соединения с бд
    function __construct(){
        $this->dsn = require_once "cfg/configdb.php";
        $this->dbh = new PDO($this->dsn['dsn'],$this->dsn['user'],$this->dsn['psw']);
        $this->dbh->query ( 'SET character_set_connection = utf8');
        $this->dbh->query ( 'SET character_set_results = utf8' );
    }
// показ всех тендеров
    public function showTender(){
       $this->result = $this->dbh->query('SELECT * FROM tb_tenders');
       $this->tenders = $this->result->fetchAll(PDO::FETCH_NAMED);
       return $this->tenders;
    }
//обновление тендера
    public function update($name){

        $stmt = $this->dbh->prepare("UPDATE tb_tenders SET title = (:title),code = (:code) WHERE id = (:id)");
        $stmt->bindParam(':title', $name['title']);
        $stmt->bindParam(':code', $name['code']);
        $stmt->bindParam(':id', $name['id']);
        $stmt->execute();
    }
//удаление тендера
    public function delete($name){

        $stmt = $this->dbh->prepare("DELETE FROM tb_tenders WHERE id = (:id)");
        $stmt->bindParam(':id', $name['id']);
        $stmt->execute();
        echo "успешно удалено!";
    }
//создание тендера
    public function create($name){

        $year = date("Y");

        $stmt = $this->dbh->prepare("INSERT INTO tb_tenders (title,code,year) VALUES (:title,:code,:year)");
        $stmt->bindParam(':title', $name['title']);
        $stmt->bindParam(':code', $name['code']);
        $stmt->bindParam(':year',$year);
        $stmt->execute();
    }
}