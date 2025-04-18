//FUNCIONEs 

let numero=10

function sumar(num){
    return num +2;
}//Definida por definicion

sumar(numero);
let resultado= sumar(numero);
console.log(resultado)


//FUNCION FLECHA
let sumarConFlecha = (num)=>{
return num+2;
}

console.log(`Sumo desde sumar con flecha el resultado es: ${sumarConFlecha(numero)}`)


//funcion flecha con una sola linea
let sumarConFlechaTOP= num => num +2;

//CALLBACK
function saludar(param1){
    console.log(`Hola ${param1}`)
}

let nombre= 'Pedro'
saludar(nombre);

function procesarSaludo(param2,callback){
console.log(`La funcion 'procesarSaludo' recibio como argumentos a ${param2} y la funcion 'saludar'
    entonces saludemos a ${param2} utilizando la callback :`)
    callback(param2);

}
procesarSaludo(nombre,saludar);




let numero1=2;
function potenciar(num1){
    numero1=num1**2
    return numero1
}
console.log(potenciar(number1))

function sumar(num2,num3,callback){
    let numero2=num3**3
    setTimeout(callback,3000,num2)//funcion, demora, argumento/s
    console.log(`Numero 1 vale ${numero1} y aun no se ejecuto el callback
        entonces el resultado de sumar es`)
}

sumar(5,3,potenciar);