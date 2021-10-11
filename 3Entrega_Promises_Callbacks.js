/*Nivell 1 - Exercici 1
Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. 
Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.*/
let parametro_1 = 1;

 const generaPromesa = ()=> {
     return new Promise((resolve, reject)=>{
         setTimeout(() => {
             if (parametro_1) {
              resolve('Success! Se ha ejecutado el ejercicio 1 del nivel 1');
             } else {
                 reject('Try again, change parametro_1 to 1');
            }
        }, 1000);
     })
 };

const handleSuccess = (resolvedValue)=> {
    console.log(resolvedValue);
};

const handleFailure = (resolvedFailure) => {
    console.log(resolvedFailure);
};

 generaPromesa(parametro_1)
    .then(handleSuccess)
    .catch(handleFailure);

/*- Exercici 2
Crear una arrow function que, rebent un paràmetre i una function callback, li passi a la funció
 un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.*/
 const imprimir_Valor = resultadoFuncion => console.log(resultadoFuncion);

  const funcionCallback = (parametro_2, functionParametro_2) => {
    if (parametro_2){
        valor_Parametro = `El parametro_1 es igual a ${parametro_2}`;
    } else {
        valor_Parametro= `El parametro_1 es distinto a 1. Su valor es ${parametro_2}`; 
    }
    functionParametro_2(valor_Parametro);
 }

 funcionCallback(0, imprimir_Valor);
 funcionCallback(1, imprimir_Valor);




/*Nivell 2 - Exercici 1
Donats els objectes employees i salaries, creu una arrow function getEmpleado que retorni
 una Promise efectuant la cerca en l'objecte pel seu id.*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmpleado = (id_Objeto) => {
    return new Promise((resolve, reject)=>{
            if (id_Objeto >= 1 && id_Objeto <= 3) {
                const elegido = employees.findIndex(empleado => empleado.id === id_Objeto);
                console.log('Se ha encontrado al empleado')  
                resolve(employees[elegido]); 
            } else {
                reject(`El índice empleado no es correcto. Solo puede tener valores del 1 al 3.
               Cámbialo y vuelve a probar.`)
            }    
    })
}




/*- Exercici 2
Creu una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni el seu salari.*/

const getSalario = (id_Objeto_Employee) => {
    return new Promise((resolve, reject)=>{
        const elegido2 = salaries.findIndex(salario => salario.id === id_Objeto_Employee.id);  
        if (elegido2 >= 0 && elegido2 <= salaries.length-1) {
            console.log(`Se ha obtenido el salario de ${id_Objeto_Employee.name}`);
            resolve(salaries[elegido2]); 
        } else {
            reject(`El nombre de empleado no tiene salario asigando.
            El índice no existe.`)
        }    
    })
}

/*- Exercici 3
Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises.*/


/*Nivell 3 - Exercici 1
Fixi un element catch a la invocació de la fase anterior que capturi qualsevol error i l'imprimeixi per consola.*/

let indiceLlamaEmpleado = 2;

getEmpleado(indiceLlamaEmpleado)
    .then((resolve1) => {
        return getSalario(resolve1)
    })
    .then((resolve2) => {
       console.log(`Salario ${resolve2.salary}`)
    })
    .catch((errormessage) => {
        console.log(errormessage)
    });

    module.exports = { getEmpleado, getSalario };
