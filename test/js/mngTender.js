class mngTender{

                            //удаление записи
    static delTnd(){
        let msg={};
        msg['method'] = 'delete';
        msg['id'] =this.parentNode.firstChild.innerHTML;
        mngTender.sendTnd(msg);
        let elem = document.getElementById(msg['id']);
        elem.parentNode.removeChild(elem);
    }
                           //редактирование записи
    static editTnd(e){
        let id = e.target.parentNode.id;
        let input = '<div id="edit"><textarea rows="10" cols="45" name="text"></textarea><textarea rows="10" cols="45" name="code"></textarea><button id="update">Обновить</button></div>';
        let insr = document.getElementsByTagName('body')[0];
        insr.insertAdjacentHTML('beforeend',input);
        let btn = document.getElementById('update');
        btn.addEventListener("click",mngTender.getData.bind(null,"update","edit",id));


    }
                          //создание записи
    static createTnd(){
        let input = '<div id="form"><input type="text" size="40" placeholder="Ведите название"><input type="text" size="40" placeholder="Ведите код"><button id="send">Создать</button></div>';
        let insr = document.getElementsByTagName('body')[0];
        insr.insertAdjacentHTML('beforeend',input);
        let btn = document.getElementById('send');
        btn.addEventListener("click",mngTender.getData.bind(this,"create","form","noId"));
    }
                          //получение данных из форм редактирования и создания
    static getData(method,elem,id) {
        let msg = {};
        msg['method']=method;
        let data = document.getElementById(elem);
        msg['title'] = data.firstElementChild.value;
        msg['code'] = data.firstElementChild.nextElementSibling.value;
        msg['id'] = id;
        console.log(msg);
        mngTender.sendTnd(msg);
    }

                        //отправка данных на сервер
    static sendTnd(msg){
            msg=JSON.stringify(msg);
            msg='data='+msg;
            let xhr = new XMLHttpRequest();
            xhr.open('POST','index.php');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(msg);
            xhr.onloadend = function() {
                if (xhr.status !==200) {
                    console.log(false,xhr);
                }
                else {
                    location.href=location.href;
                }
            };
    }

}
