const fs =require('fs');
const {exec, spawn} = require('child_process');
const crypto = require('crypto');
const zlib = require('zlib');

//*Nivell 1 Exercici 1 ✅
//*Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.


let tiempo=0

const imprimirRecursivo = () => {
    let contador = setInterval(() => {
        tiempo += 2;
        if (tiempo < 10){
            console.log(`Termina en ${10 - tiempo} segundos`);
        }  else {
            clearInterval(contador);
        }
    }, 2000);
    
    
};


//!Nivell 1 Exercici 2
//*Crea una funció que, en executar-la, escrigui una frase en un fitxer.

function writeNewFile (fileName, fileNewName, codificacion) {
    return new Promise((res, reject) =>{
        fs.readFile(fileName, codificacion, (err, data) => {
            if (err) {
                throw err;
            } else {
                fs.writeFile(fileNewName, data, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
            res(fileNewName);
            }
        });       
    })       
}
        
//!Nivell 1 Exercici 3
//*Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.


function writeOnConsole(fileName, codificacion) {
    
    return new Promise((res, reject) =>{
        fs.readFile(fileName, codificacion, (err, data) => {
            if (err) throw err;
            console.log(data);
        });
        res('OK');
    })        
}

//!Nivell 2 -  Exercici 1
//* Crea una funció que comprimeixi el fitxer del nivell 1.

function compressFile(fileName) {
    return new Promise((res, reject) =>{
        const gzip = zlib.createGzip();
        const inp= fs.createReadStream(fileName);
        const out= fs.createWriteStream(fileName+'.gz');
        inp.pipe(gzip).pipe(out);
        res(fileName+'.gz');
    })
}

//*Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.


function listFiles() {
    const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on(`close`, (code) => {
    console.log(`child process exited with code ${code}`);
});
}


//*!Nivell 3 - Exercici 1
// Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

const convertirTexto = (nombreArchivo, codificacion) =>{
    return new Promise ((res, reject) => {
        fs.readFile( nombreArchivo, {encoding: codificacion}, (err, data)=>{
            if(err){
                console.log(err);
            } else {
                //console.log(data);
                fs.writeFile( './README' + codificacion + '.txt', data, (err, data)=> {
                    if (err){
                        console.log(err);
                    } else {
                        console.log('fichero creado en ' + codificacion);
                        res('./README' + codificacion + '.txt')
                    }
                })
            }
        });
    });
}
    

const reconvertirTexto = (nombreArchivo, codificacion) =>{
    return new Promise ((res, reject) => {
        fs.readFile( nombreArchivo, (err, data)=>{
            if(err){
                console.log(err);
            } else {
                //console.log(data);
                
                let buff = new Buffer.from(data);
                let data2 = buff.toString(codificacion);

                fs.writeFile( './README' + codificacion + '.txt', data2, (err, data)=> {
                    if (err){
                        console.log(err);
                    } else {
                        console.log('fichero creado en ' + codificacion);
                        res('./README' + codificacion + '.txt')
                    }
                })
            }
        });
    });
}



//------------------------------------------------------------------------------

//TODO Crea una funció que guardi els fitxers del punt anterior, 
//ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials.

let iv = crypto.randomBytes(16);
let secret_message = 'hola :)';
let key = '12345678123456781234567812345678';

const crearArchivoCrypto = (nombreFichero, nombreNuevoFichero, codIni, codFinal)=> {
    return new Promise ((res, err)=>{
        fs.readFile(nombreFichero, 'utf-8', (err, data) => {
            
                let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
                let encrypted = cipher.update(data, codIni, codFinal);
                encrypted += cipher.final(codFinal);
                //console.log('encripted: ' + encrypted);
                
                fs.writeFile(nombreNuevoFichero, encrypted, (err, data) => {
                    if (err) throw err;
                    console.log('Archivo encriptado satisfactoriamente')
                    });

                return res(nombreNuevoFichero);
            
        });
    })        
}


// //TODO Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.

const crearArchivoDescifrado = (nombreFichero, nombreNuevoFichero, codIni, codFinal)=> {
    return new Promise ((res, err)=>{
        fs.readFile(nombreFichero, 'utf-8', (err, data) => {
            //console.log(data);
            if (err) {
                throw err;
            } else {
                let decipher =crypto.createDecipheriv('aes-256-cbc', key, iv);
                let decrypted = decipher.update(data, codIni, codFinal);
                decrypted += decipher.final(codFinal);                  
                fs.writeFile(nombreNuevoFichero, decrypted, (err, data) => {
                    if (err) throw err;
                    console.log('Archivo desencriptado satisfactoriamente')
                    });

                return res(nombreNuevoFichero);
            }
            
        });
    })        
}

// function messageDecryption(encrypted) {
//     return new Promise((res, err)=>{
//             let decipher =crypto.createDecipheriv('aes-256-cbc', key, iv);
//             let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
//             decrypted += decipher.final('utf-8');  
//             //console.log('decrypted: ' + decrypted);  
//             return res(decrypted)  
//     })    
// }

 
//* Nivell 1 execici 1 ✅ Imprimir recursivante en consola cada 2 segundos
imprimirRecursivo();


async function secuencia1 (fileName, fileNewName, codificacion){
    //*Nivell 1 exercici 2 Crear archivo ✅ 
    const NombreFicheroCreado =  await writeNewFile(fileName , fileNewName, codificacion);
    //*Nivell 1 exercici 3 Escribir archivo creado en consola ✅
    const escribirConsola = await writeOnConsole(NombreFicheroCreado, 'utf-8');
    console.log(escribirConsola);
    //*Nivell 2 exercici 1 Comprimir archivo creado ✅
    const CompressFileName = await compressFile(NombreFicheroCreado);
    console.log(`The ${CompressFileName} compressed file has been created.`);
    
    //*Lista ficheros consola ✅
    listFiles();
    //*Nivell 3 exercici 1 Convertir a Base64 y Hex✅
    const fileBase64 = await convertirTexto(NombreFicheroCreado, 'base64');
    const fileHex = await convertirTexto(NombreFicheroCreado, 'hex');
    //TODO Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials.
    const fileBase64Encrypted = await crearArchivoCrypto(fileBase64, './fileBase64encripted.txt', 'base64', 'hex');

    //TODO Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
    const fileBase64Decrypted = await crearArchivoDescifrado(fileBase64Encrypted, './fileBase64decrypted.txt', 'hex', 'base64');
    const copiainicialBase64 = await reconvertirTexto(fileBase64Decrypted, 'utf-8');

}
    
secuencia1('./README.md' , './README.txt', 'utf-8');    