/* //FUNCION CALL BACK
function primero(segundo){
    
    setTimeout(function(){
        console.log("PRIMERO");
        segundo();
    },3000)
     
}

function segundo(){
console.log("Segundo")
}

primero(segundo);


function saludar(param1){
    console.log(`Hola ${param1}`)
}

let nombre= 'Pedro'
//saludar(nombre);

function procesarSaludo(param2,callback){
console.log(`La funcion 'procesarSaludo' recibio como argumentos a ${param2} y la funcion 'saludar'
    entonces saludemos a ${param2} utilizando la callback :`)
    callback(param2);

}
procesarSaludo(nombre,saludar); */


let numero1=2;//Defino y asigno una varibale numero1
function potenciar(num1){//defino la funcion potenciar con un parametro
    numero1=num1**2//calculo la potencia
    return numero1//la funcion devuelve el valor de numero1
}
//console.log(potenciar(numero1));// se muestra lo que devuelve la func potenciar

 function sumar(num2,num3,callback){
    let numero2=num3**3
    setTimeout(callback,3000,num2)//funcion, demora, argumento/s
    console.log(`Numero 1 vale ${numero1} y aun no se ejecuto el callback
        entonces el resultado de sumar es ${numero1+numero2}` )

    setTimeout(()=>{
        console.log(`Numero 1 vale ${numero1} y aun no se ejecuto el callback
            entonces el resultado de sumar es ${numero1+numero2}` )
    },5000)    
}

sumar(5,3,potenciar); 