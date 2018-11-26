$(document).ready(
    function(){
        crearDivs();
        crearBotones();
        crearFormulario();
        foco();
    }
)

function crearDivs(){
    for (let i = 1; i <= 10; i++) {
        let body = $(document.body);
        let div = $('<div></div>');
        if(i%2!==0){
            div.addClass('impar');
        }
        let h1 = $('<h1></h1>');
        h1.text(`Div numero ${i}`);
        div.append(h1);
        for(let k = 1; k <= i; k++){
            let input = $('<input>');
            input.attr('id',`${i}_${k}`);
            input.attr('value',`${i}.${k}`);
            div.append(input);
            if(k%2===0){
            input.addClass('par');
            }
            else{
                input.addClass('impar');
            }
        }
        body.append(div);
    }
}

function crearBotones(){
    let body = $(document.body);
    let input = $('input.par');
    let boton = $('<button>Eliminar inputs pares</button>');
    boton.click(function(){
        input.remove();
    })
    let div = $('div.impar');
    let boton2= $('<button>Eliminar los divs impares</button>');
    boton2.click(function(){
        div.remove();
    })
    body.append(boton);
    body.append(boton2);
}

function crearFormulario(){
    let body = $(document.body);
    let form = $('<form></form>');
    let div1 = $('<div></div>');
    let div2 = $('<div></div>');
    let label = $('<label>Nº input:</label>');
    let input = $('<input>');
    input.attr('id','numero');
    label.attr('for','numero');
    let boton = $('<button>Cambiar clases</button>');
    boton.click(function(event){
        event.preventDefault();
        let valorbuscado = input.val();
        valorbuscado = valorbuscado.replace(".","_");
        let inputbuscado = $(`#${valorbuscado}`);
        let siguienteHermano = inputbuscado.next();
        let anteriorHermano = inputbuscado.prev();
        
        if(siguienteHermano.hasClass('impar')){
            siguienteHermano.removeClass('impar');
            siguienteHermano.addClass('par');
        } else{
            siguienteHermano.removeClass('par');
            siguienteHermano.addClass('impar');
        }

        if(anteriorHermano.hasClass('impar')){
            anteriorHermano.removeClass('impar');
            anteriorHermano.addClass('par');
        } else{
            anteriorHermano.removeClass('par');
            anteriorHermano.addClass('impar');
        }
    });
    body.append(form);
    div1.append(label);
    div1.append(input);
    div2.append(boton);
    form.append(div1);
    form.append(div2);
}

function foco(){
    let input = $('input');
    input.focus(function(event){
        let inputCambiar = $(event.target);
        inputCambiar.css("border","solid black 2px");
    });

    input.blur(function(event){
        let inputCambiar2 = $(event.target);
        inputCambiar2.css("border","");
    });
}

