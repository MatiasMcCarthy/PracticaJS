//MANEJO DE ERRORES

try {
    console.log('Intento de ejecutar el codigo');
    throw('Hay un error en el codigo');//corta la ejecucion del bloque
} catch (error) {
    console.log('Algo salio mal',error);
}