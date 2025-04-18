function cambiarDemo(){
  document.getElementById('demo').textContent='Este es el nuevo parrafo'

}

function cambiarColor(){
    let label=document.getElementById('label')

    switch(document.getElementById('select').value){
        case 'rojo':
               label.style.cssText="color: red"
               break;
         case 'azul':
               label.style.cssText="color: blue"
               break;    
         case 'verde':
               label.style.cssText="color: green"
               break;
    }
}

const arrayLista=['Carne','Ensalaada','Bebida'];
let items= '';
for (let index=0; index<arrayLista.length;index++){
items=items+'<li>' + arrayLista[index]+ '</li>';
}
document.getElementById('lista').innerHTML=items;