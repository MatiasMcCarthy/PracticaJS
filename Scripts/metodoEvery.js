let frutasOriginal =['uva','Pera','Banana','Naranja','Manzana','Pomelo','uva','anana','limon','lima'];
//EVERY Se utiliza para verificar si todos los elementos en un array cumplen con una condición proporcionada por una función de callback. Devuelve un valor booleano:

const todasManzanas=frutasOriginal.every(fruta=>fruta==='Manzana');
console.log('Son todas manzanas?: '+todasManzanas);

const tienenMas2letras=frutasOriginal.every(fruta=>fruta.length>2);
console.log('Tienen mas de dos letras?: '+tienenMas2letras);