var miVar = "Hola";
//Scope


function imprimirVar() {
    console.log('Imprimiendo mi var desde dentro la funcion  el valor es: ', miVar);
    var miVar2=2;
    console.log('Imprimiendo mi var2 desde dentro la funcion  el valor es: ', miVar2);
}

console.log('Imprimiendo mi var desde fuera la funcion  el valor es: ', miVar);
//console.log('Imprimiendo mi var2 desde fuera la funcion  el valor es: ', miVar2);

//LET
let miLet=1
function imprimirLet(){
    console.log('Imprimiendo let desde dentro la funcion  el valor es: ', miLet);
    let milet2=2;
}





//OBJETOS
let vendedor={
    nombre:"Ramon",
    apellido:"Rosales",
    empresa:"PEPE",
    habilidadesBLandas:['Trabajo en equipo','comunicacion'],
    vender: function(){
        return 'Ramon vendió'
    },
    obtenerNombrecompleto: function(){
        return  `EL nombre completo de este vendedor es  
        ${this.nombre} ${this.apellido}`
    }
}
console.log(vendedor);

//Modificar OBJETO

//vendedor.apellido='Gutierrez';//cambia el valor
//vendedor.edad=56;//AGrego un campo al objeto



