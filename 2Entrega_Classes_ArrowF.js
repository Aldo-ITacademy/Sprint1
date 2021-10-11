
    /*Nivell 1 - Exercici 1
Imprimir per pantalla el resultat d'una arrow 
function autoinvocable que sumi dos nombres.
*/

const prueba = ((nombre1, nombre2) => {
    console.log(nombre1+nombre2);
    console.log(`Suma: ${nombre1 + nombre2}`);
}) ('Name1', 'Name2');


/*Nivell 2 - Exercici 1
Crear una arrow function que, rebent un paràmetre, 
retorni un objecte amb un atribut que tingui com a 
valor el paràmetre rebut.
*/

const objetos = param1 => { return {atributo : param1};}

objeto1 = objetos('flexible');
console.log(objeto1.atributo);
console.log(objeto1['atributo']);
console.log(objeto1);

/* - Exercici 2
Crear una classe Persona que rebi un paràmetre 'nom' 
a l'ésser creat. La classe inclourà un mètode decirNombre 
que imprimeixi per consola el paràmetre 'Nom'. Invocar el mètode 
decirNombre des de fora de la classe.
*/
class Persona {
    constructor (nom){
        this.nom=nom;
        };
   decirNombre = () => console.log(`Hola soy ${this.nom}`);
};

let person1 = new Persona('NuevaPersona');
person1.decirNombre();

/* Nivell 3
- Exercici 1
Crear una function creadora d'objectes, abstraient la definició de les classes. 
Invocar-amb diferents definicions.
*/



const crea_objetos = (propiedad1, propiedad2) => {
    return {
        propiedad1,
        propiedad2
    };
}


let objeto10 = crea_objetos('heavy', 'new');
console.log(objeto10);

let arbol = crea_objetos('small', 'green');
console.log(arbol);