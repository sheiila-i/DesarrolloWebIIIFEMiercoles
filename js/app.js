alert();
var num = 0;
function mostrar() {
    num = 2;
}
mostrar();
console.log(num)

let resultado = 0;/**variable con scope global*/
/*String, int , bool, undefine,array object, null*/
console.log(suma());
console.log(resultado);
function suma() {
    resultado = 10;
    return resultado;
}
let nombre = "Luis";
let apellido = "Navas";
let edad = 48;
let llueve = true;
let participantes = [
    "Junior", "Luis", "Ivana",
    "Martin", "Sheila", "Chenoa",
    "Marcos", "Sebastian"];
for (let a = 0; a < participantes.length; a++) {
    console.log(participantes[a]);
}
participantes.forEach(part => console.log(part));

/* function render() {
    let contenedor = document.getElementById('root');
    participantes.forEach(part => contenedor.innerHTML += "<H2>" + part + "</H2>");
    //innerHTML crea un hijo= una sentencia o instruccion dentro de estee elemento
} */

function render() {
    let contenedor = document.getElementById('root');
    participantes.forEach(part => contenedor.innerHTML +=
        `<div class='card col-2' style='width: 18rem;'>
            <img src='...' class='card-img-top' alt='...'>
            <div class='card-body'>
                <h5 class='card-title'>${part}</h5>
                <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='#' class='btn btn-primary'>Go somewhere</a>
            </div>
            </div>` 
        );
}
render();