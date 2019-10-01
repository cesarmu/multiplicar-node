const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El parámetro no es un número.').red
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }`.yellow);
        }

        resolve(`Tabla del ${base} listada, desde el 1 hasta el ${limite}.`.green);
    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El parámetro no es un número.')
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${ base } * ${ i } = ${ base * i }`);
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`./tablas/tabla-del-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-del-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}