const { argv } = require('./config/yargs')
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//const multiplicar = require('./multiplicar/multiplicar');
// multiplicar.crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`));

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(result => console.log(result))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    case undefined:
        console.log('No hay comando'.red);
        break;
    default:
        console.log('Comando no reconocido'.red);
        break;
}


//Todo esto es local
//git init
//git status
//Si se quieren omitir archivos o carpetas se genera el archivo .gitignore
//git add   --este es para agregar todos los archivos al git (para crear un snapshot, previo a realizar un commit)
//git status   -- los archivos o carpetas en verde son los que van a hacerse commit
//git commit -m "Tablas de multiplicar"

//Esto es para pasarlo al git en linea
//git remote add origin https://github.com/cesarmu/multiplicar-node.git
//git push -u origin master






//console.log(module);
//console.log(process.argv);
//let argv = process.argv;

// let parametro = argv[2];
// let base = parametro.split("=")[1];

//console.log(argv.base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(e => console.log(e));