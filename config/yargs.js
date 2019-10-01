const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'imprime en un archivo de texto la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}