

                           //назначение обработчиков
function start() {

    var btnCreate = document.getElementById("btnCreate");
    var btnEdit = document.getElementsByClassName("btnEdit");
    var btnShow = document.getElementsByClassName("btnShow");
    var btnDel = document.getElementsByClassName("btnDel");


    btnCreate.addEventListener("click",mngTender.createTnd);

    for(var i=0; i<btnEdit.length; i++){
        btnEdit[i].addEventListener("click",mngTender.editTnd);
    }
    for(var i=0; i<btnShow.length; i++){
        btnShow[i].addEventListener("click",mngTender.showTnd);
    }
    for(var i=0; i<btnDel.length; i++){
        btnDel[i].addEventListener("click",mngTender.delTnd);
    }
}


window.onload = start;