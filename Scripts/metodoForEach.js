let frutas =['uva','Pera','Banana','Naranja','Manzana','Pomelo'];
//FOREACH
frutas.forEach((fruta,indice,array)=>{
    console.log(`Fruta:${fruta},indice: ${indice}, Array: ${array}`)
    })
    console.log(`*************************`)

    frutas.forEach((fruta,indice)=>{
        console.log(`Fruta:${fruta},indice: ${indice}`);
        let indiceMutliplicado= indice*2;
        console.log(indiceMutliplicado);
        })