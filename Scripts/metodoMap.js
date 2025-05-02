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