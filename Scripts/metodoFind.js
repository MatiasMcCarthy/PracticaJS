let frutasOriginal =['uva','Pera','Banana','Naranja','Manzana','Pomelo','uva','anana','limon','lima'];



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