//ARRAYS
//const array=['HTML','CSS','JS', true, ['1','2'],{nombre:'matias',apellido:'MC'}];
//console.log(array);

/*const array=  new Array(5);
array[0]='HTML';
console.log(array);

const arrayNumeros=[3,4,5,6,7]
console.log(arrayNumeros.length)
arrayNumeros[arrayNumeros.length]=100
console.log(arrayNumeros);

arrayNumeros[arrayNumeros.length+3]=105
console.log(arrayNumeros);*/

let frutas =['Manzana','Pera','Banana','Naranja','Manzana','Pomelo']

//METODOS
//FILTER DEVUELVE UN ARRAY NUEVO SEGUN CRETERIO DEFINIDO SOBRE EL ARRAY ORIGEN

let filter=frutas.filter((param)=>{
    return param=='Manzana';
})
console.log(filter);

let filter2 =frutas.filter(param=> param=='Bananna');
console.log(filter2);

const temas=[

 {tema:'HTML',materia:'Mobile'},
 {tema:'CSS',materia:'Mobile'},
 {tema:'IONIC',materia:'TIC'}

]
console.log(temas)

let temasFiltrados=temas.filter(param=> param.materia=='TIC')

console.log(temasFiltrados);


//MAP cambiar o transformar los elementos del array original

let arrayManzana=['Manzana','Manzana','Manzana','Manzana','Banana','Manzana','Manzana']

let arrayNaranjas =arrayManzanas.map(
    param=>{
if(param=='Manzana'){
    return 'Naranja'
}
})
//console.log(arrayManzana)
//console.log(arrayNaranjas)

//FILL reemplazar por naranja
//desde incluido y el hasta no
let resutladoFill= arrayManzana.fill('Naranja',2,5)

console.log(resutladoFill);

//FIND
//FIND INDEX
//SOME devuelve true o false

//EVERY
//POP elimna el ultimo elemento 
//SHIFT elimina el primer elemento 


