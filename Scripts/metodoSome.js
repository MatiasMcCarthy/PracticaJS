let frutasOriginal =['uva','Pera','Banana','Naranja','Manzana','Pomelo','uva','anana','limon','lima'];

//SOME devuelve true o false El método some() en JavaScript se utiliza para verificar si al menos uno de los elementos en un array cumple con una condición proporcionada por una función de callback. Devuelve un valor booleano: true si al menos un elemento cumple la condición, y false si ninguno de los elementos la cumple.
const hayBanana = frutasOriginal.some(fruta => fruta === 'Banana');
console.log('Existe Banana en el array? '+hayBanana); // Salida: true (porque 'Banana' existe en el array)

const noHayDurazno=frutasOriginal.some(fruta=>fruta==='Durazno');
console.log('Existe Durazno en el array? '+noHayDurazno);