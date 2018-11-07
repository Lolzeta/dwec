let formulario = document.createElement("form");
formulario.setAttribute("method","post");
document.body.appendChild(formulario);
for (let i = 0; i < 11; i++) {
    let divi = document.createElement("div");
    formulario.appendChild(divi);
    for(let k = 0; k < i; k++){
        let inp = document.createElement("input");
        if(k%2==0){
            inp.setAttribute("class","red");
        } else{
            inp.setAttribute("class","green");
        }
        inp.id = i + "." + k;
        inp.value = i + "." +  k;
        inp.setAttribute("onmouseover", "rosado(id)");
        inp.setAttribute("onmouseout", "azulado(id)");
        divi.appendChild(inp);
    }
}


function intercambiarColores(){
    let lista = document.getElementsByTagName("input");
    for (let clase of lista) {
        if(clase.getAttribute("class") === "red"){
        clase.setAttribute("class","green");
        } 
        else{
            clase.setAttribute("class","red");
        }
    }
}

function rosado(id){
    let element = document.getElementById(id);
    element.style.backgroundColor = "pink";
}

function azulado(id){
    let element = document.getElementById(id);
    element.style.backgroundColor = "blue";
}

let boton  = document.createElement("button");
boton.setAttribute("type","button");
boton.setAttribute("onclick","intercambiarColores()");
boton.innerHTML = "Cabesa";
formulario.appendChild(boton);