<?php


class tenderController
{
    private $data;
    private $request;
    private $model;
//определяем какой запрос
    function __construct($post)
    {

        if($post==null){
           $this->request='showTender';
        }
        else {
            $post = json_decode($post, true);
            $this->request = array_map('strip_tags', $post);
        }

    }
//выполняем запрос
    public function run()
    {
        $this->data = $this->getData();
        if(!is_array($this->request)) {
            require_once "view/tenderView.html";
        }
    }
//определяем метод модели
    private function getData()
    {
        $name = $this->request;
        $this->model = new tenderModel();

        if(is_array($name)){
            $action = $name['method'];
            return $this->model->$action($name);
        }
        return $this->model->$name();
    }

}