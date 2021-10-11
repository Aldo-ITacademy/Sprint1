//- Exercici 1
//Donats els objectes Employees i Salaries, 
//creu una arrow function getEmpleado que retorni una Promise 
//efectuant la cerca en l'objecte pel seu id. 
//Creu una altra arrow function getSalario que rebi com a paràmetre 
//un objecte Employee i retorni el seu salari.


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


const getEmpleado = async(id_Objeto) => {
    const elegido = employees.findIndex(empleado => empleado.id === id_Objeto);
            if (typeof elegido != 'error') {    
                console.log('Se ha encontrado al empleado')  
                return(employees[elegido]); 
            } else {
                return(new Error(`El índice empleado no es correcto. Solo puede tener valores del 1 al 3.
               Cámbialo y vuelve a probar.`));
            }
}



const getSalario = async (id_Objeto_Employee) => {

    const elegido2 = salaries.findIndex(salario => salario.id === id_Objeto_Employee.id); 
        if (typeof elegido2 != 'error') {
            console.log(`Se ha obtenido el salario de ${id_Objeto_Employee.name}`);
            return(salaries[elegido2]); 
        } else {
            return(new Error(`El nombre de empleado no tiene salario asignado.
            El índice no existe.`));
        }  
    
}


//- Exercici 2
//Creu una funció asíncrona que, rebent un id d'empleat, 
//imprimeixi per pantalla el nom de l'empleat i el seu salari

const indexEmpleado = 2;

async function imprimirNomSal(){
    try {
        const nomEmpleado = await getEmpleado(indexEmpleado);
        const salarioEmpleado = await (getSalario(nomEmpleado))
        console.log(`El salario de ${nomEmpleado.name} es ${salarioEmpleado.salary}`);
    } catch (error) {
        console.log(error.message);       
    }
} 

imprimirNomSal();

//Nivell 2
//- Exercici 1
//Creu una funció asíncrona que anomeni a una altra que retorni
// una Promise que efectuï la seva resolve amb una demora de 2 segons.

const promiseNivell2 = (ParamDecision = 1) => {
    return new Promise ((res, err) => {
        setTimeout(() => {
            if (ParamDecision === 1){
                res(employees);
            } else {
                err(new Error('Hay un error'));
            }
        }, 2000);
    })
}




Nivell2();


//Nivell 3
//- Exercici 1
//Capturi tots els errors possibles del Nivell 2.

const Nivell2 = async() => {
    try {
        const ArrayEmployees = await (promiseNivell2());
        console.log(ArrayEmployees);
    } catch (error) {
        console.log(error.message);
    }
};