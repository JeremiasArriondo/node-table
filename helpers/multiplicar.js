const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 1, listar = false, hasta = 10 ) => {
    try{
        
        let salida = '';
        let consola = '';

        for(i=1; i <= hasta; i++){
            consola += `${i} ${'x'.green} ${base} ${'='.green} ${i * base}\n`;
            salida += `${i} x ${base} = ${i * base}\n`;
        }
        if (listar){
            console.log('####################'.green)
            console.log(`Tabla del ${base}`)
            console.log('####################'.green)
            console.log(consola);
        }
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
        return `tabla-${ base }.txt`
    } catch(err) {
        throw err
    }   
};

module.exports = {
    crearArchivo
}