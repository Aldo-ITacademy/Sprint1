// Nivell 1
/* Exercici 1. Crear funció que imprimeixi el consola el 
nom d'usuari sent invocada externament i passant el nom com a paràmetre.*/

function printname (nombre){
    console.log(nombre);
}

printname('Aldo');
printname('Nuevo nombre');

//Nivell 2
/*- Exercici 1
Imprimir el nom i cognoms de l'usuari en variables mitjançant 
template literals, creant les variables i referenciant en la impressió de l'missatge
*/
let user_name = 'Aldo';
let last_name = 'Jimenez';
console.log(`El usuario es ${user_name} ${last_name} `);


/*- Exercici 2
Invocar la funció mitjançant template literals */

function print_name_lastname(nombre, apellido){
    return (`${nombre} ${apellido}`);
}

console.log(`Los datos del usuario son: ${print_name_lastname(user_name, last_name)}`);

//Nivell 3
/* Exercici 1
Crea una matriu de deu funcions i empleni-la mitjançant un bucle. 
Cada funció comptarà del 0-9 imprimint-ho per pantalla. 
Invoqui cada funció de l'array iterativament. 
Haurà d'imprimir-se per pantalla el compte de 0-9 deu vegades */

//Declarar array
const array_de_funciones = new Array(10);

//función contenido de escritura de numeros
const contenido = function write_numbers() {
    let line ='';
    for (let i = 0; i <= 9; i++){
        line = line + i;
    }
    console.log(line);
}

//Rellenar elementos del array con la función
for (let count =0; count < array_de_funciones.length; count++){
    array_de_funciones[count] = contenido;
}

//invocar las funciones guardadas en cada elemento del array
for (let i = 0; i<=9; i++){
    array_de_funciones[i]();
}

//- Exercici 2
/*Crear una funció anònima autoinvocable (igualada a una variable) 
que imprimeixi per pantalla el nom d'usuari rebut com a paràmetre */
let nombre_anonimo = 'Sin nombre';

const funcion_anonima = (function (nombre){
    console.log(nombre);
    })(nombre_anonimo);