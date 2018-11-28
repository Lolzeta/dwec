$(document).ready(
    function(){
        alerta();
        escondido();
        botonEnviado();
    }
)

function validarNombre(){
    let resultado = false;
    let nombre = $('#nombre');
    let sintax = new RegExp(/^([a-zA-Z]{4,})$/,"g");
    if(sintax.test(nombre.val())){
        resultado = true;
    }
    return resultado;
}

function validarApellidos(){
    let resultado = false;
    let apellidos = $('#apellidos');
    let sintax = new RegExp(/^([a-zA-Z]+)\s([a-zA-Z]+)$/,"g");
    if(sintax.test(apellidos.val())){
        resultado = true;
    }
    return resultado;
}

function validarEdad(){
    let resultado = false;
    let edad = $('#edad');
    if(edad.val()>=18){
        resultado = true;
    }
    return resultado;
}

function alerta(){
    $(".alert").hide();
}

function escondido(){
    $(".lds-hourglass").hide(1000, habilitarBoton);
}

function mostrarCarga(){
    $(".lds-hourglass").show(500,escondido);
}

function habilitarBoton(){
    $("#ejecutar").removeAttr("disabled");
}



function botonEnviado(){
    let boton = $("#ejecutar");
    boton.click(function(event){
        event.preventDefault();
        boton.attr("disabled", "true");
        if(validarNombre() && validarApellidos() && validarEdad()){
        mostrarCarga();
        $("#nombre").next().text("");
        $("#apellidos").next().text("");
        $("#edad").next().text("");
        boton.submit();
        } else{
        mostrarCarga();
        lanzarErrores();
        }
    })
}

function lanzarErrores(){
    let divErr1 = $("#nombre").next();
    let divErr2 = $("#apellidos").next();
    let divErr3 = $("#edad").next();

    if(!validarNombre()){
        divErr1.text("El nombre debe de tener solo letras y ser mayor de 3.");
    } else{
        divErr1.text("");
    }

    if(!validarApellidos()){
        divErr2.text("El apellido debe de tener solo letras y un espacio entre ellos.");
    } else{
        divErr2.text("");
    }

    if(!validarEdad()){
        divErr3.text("La edad debe de ser mayor a 18.");
    } else{
        divErr3.text("");
    }
}