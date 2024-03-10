function botonColor(boton){

    var cuentaBoton = document.getElementById("cuentaBoton");
    var buscarBoton = document.getElementById("buscarBoton");
    var mensajesBoton = document.getElementById("mensajesBoton");
    var guardadosBoton = document.getElementById("guardadosBoton");
    cuentaBoton.style.setProperty("background-color","#625d00");
    buscarBoton.style.setProperty("background-color","#625d00");
    mensajesBoton.style.setProperty("background-color","#625d00");
    guardadosBoton.style.setProperty("background-color","#625d00");
    var seleccionado = document.getElementById(boton);
    
    if(boton != "cuentaRegistradaBoton"){
        seleccionado.style.setProperty("background-color","#494600");
    }
    
    if(boton == "cuentaBoton"){
        seccion("cuentaSeccion");
    }else if(boton == "cuentaRegistradaBoton"){
        seccion("cuentaRegistradaSeccion");
    }else if(boton == "buscarBoton"){
        seccion("buscarSeccion");
    }else if(boton == "mensajesBoton"){
        seccion("mensajesSeccion");
    }else if(boton == "guardadosBoton"){
        seccion("guardadosSeccion");
    }
}

function seccion(seccion){
    var cuentaSeccion = document.getElementsByClassName("cuentaSeccion")[0];
    var buscarSeccion = document.getElementsByClassName("buscarSeccion")[0];
    var mensajesSeccion = document.getElementsByClassName("mensajesSeccion")[0];
    var guardadosSeccion = document.getElementsByClassName("guardadosSeccion")[0];

    cuentaSeccion.style.visibility = "hidden";
    buscarSeccion.style.visibility = "hidden";
    mensajesSeccion.style.visibility = "hidden";
    guardadosSeccion.style.visibility = "hidden";

    var seleccionado = document.getElementsByClassName(seccion)[0];

    seleccionado.style.visibility = "visible";
}
