

/* Crea una función llamada saludarDespuesDeEsperar que tome dos argumentos: un nombre (string) y una función callback. La función saludarDespuesDeEsperar deberá esperar 2 segundos (usando setTimeout) y luego ejecutar la función callback, pasándole el nombre como argumento.

Luego, llama a saludarDespuesDeEsperar con tu nombre y una función callback que simplemente muestre un saludo en la consola (por ejemplo: "¡Hola, [tu nombre]!"). */

let nombre='Ezequiel';
let saludar=(nombre)=>console.log(`Hola ${nombre}`);

let saludarDespuesDeEsperar=(nombre,callback)=>{
   setTimeout(callback,2000,nombre);
   
}

saludarDespuesDeEsperar(nombre,saludar);

/* Ejercicio: Operación matemática asíncrona

Crea una función llamada realizarOperacion que tome tres argumentos:

num1 (un número)
num2 (un número)
operacionCallback (una función callback que tomará dos números como argumentos y devolverá el resultado de una operación).
Dentro de realizarOperacion, utiliza setTimeout para simular una operación asíncrona que tarda 1.5 segundos (1500 milisegundos).

Después de la demora, ejecuta la función operacionCallback, pasándole num1 y num2 como argumentos.

Finalmente, llama a realizarOperacion dos veces con diferentes números y dos funciones callback diferentes:

Una función callback que realice la suma de los dos números y muestre el resultado en la consola (ej: "La suma es: [resultado]").
Otra función callback que realice la multiplicación de los dos números y muestre el resultado en la consola (ej: "El producto es: [resultado]"). */
let resultado=0;
let realizarOperacion=(num1,num2,callback)=>{
    setTimeout(callback,1500,num1,num2);
}
    

let sumar=(num1,num2)=> console.log(`La suma es: ${num1+num2}`);

let multiplicar=(num1,num2)=>console.log(`la multiplicacion es: ${num1*num2}`);

realizarOperacion(5,5,sumar);
realizarOperacion(5,5,multiplicar);