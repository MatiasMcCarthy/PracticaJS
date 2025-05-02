//SPLICE agrega elimina o reemplaza elemento/s en un array
//orden de argumentos->(Indici array,cantidad,elementos)
 let num=[1,2,3,4,5];
console.log(num)
num.splice(2,1)//ELiminar un 1 elemento desde el indice 2
console.log(num);
num.splice(2,0,'melon','sandia')//agrega un 2 elementos a aprtir del 2
num.splice(2,2,99,100)//reemplaza dos elementos