function redireccionar(empleo){

    var empleoo = document.getElementsByClassName(empleo)[0];
    
    location.href = empleoo.href

}

function efecto(contenedor){
    var guardados = document.querySelectorAll('.postsEmpleos a');
    
    guardados.forEach(function(element, index){
        if(element.classList.contains(contenedor)){
            element.style.setProperty("background-color","#282700");
        }else{
            element.style.setProperty("background-color","#494600");
        }
    });
}