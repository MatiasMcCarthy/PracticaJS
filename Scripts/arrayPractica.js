let frutas =['Manzana','Pera','Banana','Naranja','Manzana','Pomelo'];
//FILTER  DEVUELVE UN ARRAY NUEVO SEGUN CRETERIO DEFINIDO SOBRE EL ARRAY ORIGEN

let frutasFiltradas=frutas.filter((param)=>{
    return param==`Manzana`;
})
console.log(frutasFiltradas);
// CUANDO SOLO TIENE UNA LINEA Y UN PARAMETRO SE PUEDE ESCRIBIR ASI:
let frutasFiltradas2=frutas.filter(param=>param=='Pera');
console.log(frutasFiltradas2);

let notas= [1,2,7,8,9,10,5,5,7,5,7,4,5];

let notasDesaprobadas=notas.filter(elementoNota=>elementoNota<5);
let notasAprobadas=notas.filter(elementoNotas=>{
    return elementoNotas>=5
})
console.log(notasDesaprobadas);
console.log(notasAprobadas);

const temas=[

    {tema:'HTML',materia:'Mobile'},
    {tema:'CSS',materia:'Mobile'},
    {tema:'IONIC',materia:'TIC'},
    {tema:'NODEJS',materia:'TIC'}
   
   ]
   
   const temasFiltrados=temas.filter(itemTemas=>itemTemas.materia=='Mobile');
   console.log(temasFiltrados);
   

//PUSH Agrega un elemento al array
frutas.push('Uva');
frutas.push('Naranja');
//console.log(frutas);

//POP Elimina el ultimo elemento
frutas.pop();
// SHIFT ELimina el primer elemento
frutas.shift();

//MAP cambiar o transformar los elementos del array original

let arrayManzana=['Manzana','Manzana','Manzana','Manzana','Banana','Manzana','Manzana'];

let arrayManzanaModificado= arrayManzana.map(itemArrayManzana=>{
    if(itemArrayManzana=='Manzana'){ // si el elemento coincide con el string
        return 'Naranja'        //lo reemplazo por naranja si no coincide le deja undefined
    }
    
})
console.log(arrayManzanaModificado)
let preciosSinImpuesto=[200,100,1000,5000]
let preciosConimpuesto=preciosSinImpuesto.map(itemPrecioSinImpuesto=>{ 
    return itemPrecioSinImpuesto + (itemPrecioSinImpuesto*0.1) //retorna con la modificacion del elemento
})
console.log(preciosConimpuesto)

// FILL reemplazar desde la posicion indicada el inicio esta incluido, el final no

let frutasOriginal =['uva','Pera','Banana','Naranja','Manzana','Pomelo','uva','anana','limon','lima'];
let reemplazoConFillFrutasOriginal=frutasOriginal.fill('kiwi',6,7);
console.log(reemplazoConFillFrutasOriginal);


//FIND   JavaScript se utiliza para recorrer un array y devolver el valor del primer elemento del array que cumpla con una condición proporcionada 
let  primeraFruta=frutasOriginal.find(elementoFruta=>elementoFruta==='Manzana');
console.log(primeraFruta);

//Primera fruta que tenga un largo mayor a 5
let primeraLarga=frutasOriginal.find(elementoFruta=>elementoFruta.length>5);
console.log(primeraLarga);

//Primera fruta con la letra l
let primerLetraL=frutasOriginal.find(elementoFruta=>elementoFruta.startsWith('l'))
console.log(primerLetraL)

// si no encuentra devuelve undefined
let primerLetraX=frutasOriginal.find(elementoFruta=>elementoFruta.startsWith('X'))
console.log(primerLetraX)



//FIND INDEX El método findIndex() en JavaScript funciona de manera muy similar a find(), pero en lugar de devolver el valor del primer elemento que cumple la condición, devuelve el índice de ese elemento. Si ningún elemento cumple la condición, findIndex() devuelve -1

let  indiceFruta=frutasOriginal.findIndex(elementoFruta=>elementoFruta==='Manzana');
console.log(indiceFruta);

let noExisteIndice=frutasOriginal.findIndex(elementoFruta=>elementoFruta==='Huevo');
console.log(noExisteIndice);

//SOME devuelve true o false El método some() en JavaScript se utiliza para verificar si al menos uno de los elementos en un array cumple con una condición proporcionada por una función de callback. Devuelve un valor booleano: true si al menos un elemento cumple la condición, y false si ninguno de los elementos la cumple.
const hayBanana = frutasOriginal.some(fruta => fruta === 'Banana');
console.log('Existe Banana en el array? '+hayBanana); // Salida: true (porque 'Banana' existe en el array)

const noHayDurazno=frutasOriginal.some(fruta=>fruta==='Durazno');
console.log('Existe Durazno en el array? '+noHayDurazno);


//EVERY Se utiliza para verificar si todos los elementos en un array cumplen con una condición proporcionada por una función de callback. Devuelve un valor booleano:

const todasManzanas=frutasOriginal.every(fruta=>fruta==='Manzana');
console.log('Son todas manzanas?: '+todasManzanas);

const tienenMas2letras=frutasOriginal.every(fruta=>fruta.length>2);
console.log('Tienen mas de dos letras?: '+tienenMas2letras);