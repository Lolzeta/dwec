document.body.addEventListener("click",function(event){
    console.log(`${event.x}.${event.y}`);
});

let teclaPulsada = document.getElementById("teclaPulsada");

teclaPulsada.addEventListener("keydown",function(event){
   console.log(event.key);
});

let divo = document.getElementById("dava");

divo.addEventListener("dragover",function(event){
    event.preventDefault();
    alert("Soltado");
});

let texto = document.getElementById("textito");

texto.addEventListener("mouseup",function(event){
    console.log(event.view.getSelection().toString());
})

let formulario = document.getElementById("formulario");
let boton = document.getElementById("boton");

formulario.addEventListener("submit",function(event){
    event.preventDefault();
    boton.setAttribute("disabled","true");
});