function chat(chatNombre){
    var mensajes = document.querySelectorAll('.mensajes div');
    var index
    mensajes.item(1).classList
    
    mensajes.forEach(function(element, index){

        if(element.classList.contains(chatNombre)){
            element.style.setProperty("background-color","#282700");
        }else{
            element.style.setProperty("background-color","#494600");
        }
    });
}


    