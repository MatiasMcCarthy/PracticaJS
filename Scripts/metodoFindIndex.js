//FIND INDEX El método findIndex() en JavaScript funciona de manera muy similar a find(), pero en lugar de devolver el valor del primer elemento que cumple la condición, devuelve el índice de ese elemento. Si ningún elemento cumple la condición, findIndex() devuelve -1
let frutasOriginal =['uva','Pera','Banana','Naranja','Manzana','Pomelo','uva','anana','limon','lima'];

let  indiceFruta=frutasOriginal.findIndex(elementoFruta=>elementoFruta==='Manzana');
console.log(indiceFruta);

let noExisteIndice=frutasOriginal.findIndex(elementoFruta=>elementoFruta==='Huevo');
console.log(noExisteIndice);