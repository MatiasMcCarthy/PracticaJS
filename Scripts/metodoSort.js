let numeros1=[1,7,14,20,12,8];
let numeros2=[1,7,14,20,12,8];
let arrayOrdenadoMenorAMayor=numeros1.sort((a,b)=>a-b);
let arrayOrdenadoMayorAMenor=numeros2.sort((a,b)=>b-a);
console.log(`EL array ordenado de menor a mayor ${arrayOrdenadoMenorAMayor}`);
console.log(`array ordenado de mayor a menor ${arrayOrdenadoMayorAMenor}`);