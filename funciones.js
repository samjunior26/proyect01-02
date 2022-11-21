/* Metodos de cadena -> objeto String */


// Ejemplo 01
const result = document.getElementById("resultado");
/*
[H|o|l|a] -> Array -> Tamaño -> Cantiad de elementos = 4
[0|1|2|3] -> Indices

*/

// datos
let cadena = "Hola mundo";
let buscarCadena = "h";

// procesos
cadena = cadena.toLowerCase();
buscarCadena = buscarCadena.toLowerCase();

let pos = cadena.indexOf(buscarCadena);

// Resultado
result.innerText = "Posicion de la subcadena: " + pos;

// ejemplo 02

// Datos
let usuario ="jperez"; // Usuario existente
let mensaje ="";
const txtUser = document.getElementById("txtUsuario");
const btnEnviar = document.getElementById("btnEnviar");
const result2 = document.getElementById("resultado2");

btnEnviar.onclick = function(){
    // Procesos
    // Capturar el valor
    let user = txtUser.value;

    usuario = usuario.toLowerCase();
    user = user.toLowerCase();
    
    if(usuario == user){
        mensaje ="Usuario existe";
    }else{
        mensaje ="Usuario No existe";
    }

    // Resultado
    result2.innerText = mensaje;
}

// Ejemplo 3:  Cortar cadenas

// Datos
const cadenaOriginal = document.getElementById("txtCadena");
const btnCortar = document.getElementById("btnCortar");
const result3 = document.getElementById("resultado3");

btnCortar.onclick = function(){
    // Proceso
    let cadOriginal = cadenaOriginal.value;
    let cadCortada = cadOriginal.split(" "); // Return Array
    // Salida
    result3.innerText = "Tamaño: " + 
        cadCortada.length +
        "\n" + "Indice 0: " + cadCortada[0] + 
        "\n" + "Indice 1: " + cadCortada[1] +
        "\n" + "Indice 2: " + cadCortada[2];
}

// Ejemplo 4:  Array

// Datos
const btnArray = document.getElementById("btnArray");
const result4 = document.getElementById("resultado4");

let mensaje2 ="";
// declarar un array
let cadArray = "Hola como estas";
let numArray = [100, 200, 300, 400, 500];
//* Archivo de datos json
let users = ["jperez", "nmarcos"];
let pass = ["certus@", "123certus"];
let estado = [0, 0];
//******************************** */
btnArray.onclick = function(){
    // Estado del usuario jperez
    if(estado[0] == 1){
        mensaje2 = "El usuario esta activo";
    }else{
        mensaje2 = "El usuario esta bloqueado";
    }
    result4.innerText = 
        "Tamaño cadArray: " + cadArray.length + "\n" +
        "Tamaño numArray: " + numArray.length + "\n" +
        "Total de usuarios: " + users.length +  "\n" +
        "Indice 7 de cadArray: " + cadArray[7]+ "\n" +
        "Pass de jperez: " + pass[0] + "\n" +
        "Estado de jperez: " + mensaje2 + "\n";
}


