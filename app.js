const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado con éxito!'))
    .catch( err => console.log(err))



// fs.writeFile( 'tabla-5.txt', salida, (err) => {
//     if (err) throw err;
//     console.log('Archivo creado!!')
// });