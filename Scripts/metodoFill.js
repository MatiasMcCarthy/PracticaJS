// FILL reemplazar desde la posicion indicada el inicio esta incluido, el final no

let frutasOriginal =['uva','Pera','Banana','Naranja','Manzana','Pomelo','uva','anana','limon','lima'];
console.log(`Array Original`,frutasOriginal);
let reemplazoConFillFrutasOriginal=frutasOriginal.fill('kiwi',6,8);
console.log(reemplazoConFillFrutasOriginal);