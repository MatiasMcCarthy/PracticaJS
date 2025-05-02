let frutas =['Manzana','Pera','Banana','Naranja','Manzana','Pomelo'];
 //FILTER  DEVUELVE UN ARRAY NUEVO SEGUN CRETERIO DEFINIDO SOBRE EL ARRAY ORIGEN

let frutasFiltradas=frutas.filter((param)=>{
    return param==`Manzana`;
})
console.log(frutasFiltradas);
// CUANDO SOLO TIENE UNA LINEA Y UN PARAMETRO SE PUEDE ESCRIBIR ASI:
let frutasFiltradas2=frutas.filter(param=>param=='Pera');
console.log(frutasFiltradas2);

let notas= [1,2,7,8,9,10,5,5,7,5,7,4,5];

let notasDesaprobadas=notas.filter(elementoNota=>elementoNota<5);
let notasAprobadas=notas.filter(elementoNotas=>{
    return elementoNotas>=5
})
console.log(notasDesaprobadas);
console.log(notasAprobadas);

const temas=[

    {tema:'HTML',materia:'Mobile'},
    {tema:'CSS',materia:'Mobile'},
    {tema:'IONIC',materia:'TIC'},
    {tema:'NODEJS',materia:'TIC'}
   
   ]
   
   const temasFiltrados=temas.filter(itemTemas=>(itemTemas.materia=='Mobile'&&itemTemas.tema=='CSS'));
   console.log(temasFiltrados);

   let jugadores={
    listaJugadores:[
        {
           nombre:`Cristiano`,
           apellido:`Ronaldo`,
           dorsal:7,
           edad:39,
           equipo:`Real Madrid`,
           habilidades:[`Cabezazo`,`Remate`,`Velocidad`],
           equiposAnteriores:[`Manchester`,`Sporting Lisboa`],
           obtenerNombreCompleto:function(){
               return `El nombre completo de este jugador es ${this.nombre} ${this.apellido}`
           },
           actualizarEquipo: function(nuevoEquipo){
               this.equiposAnteriores.push(this.equipo)
               this.equipo=nuevoEquipo;
               
           }
       },
       {
           nombre:`Luka`,
           apellido:`Modric`,
           dorsal:10,
           edad:39,
           equipo:`Real Madrid`,
           habilidades:[`Remate`,`Pase`],
           equiposAnteriores:[`Totenham`],
           obtenerNombreCompleto:function(){
               return `El nombre completo de este jugador es ${this.nombre} ${this.apellido}`
           },
           actualizarEquipo: function(nuevoEquipo){
               this.equiposAnteriores.push(this.equipo)
               this.equipo=nuevoEquipo;
               
           }
       },
       {
           nombre:`Lionel`,
           apellido:`Messi`,
           dorsal:10,
           edad:37,
           equipo:`Inter Miami`,
           habilidades:[`Pase`,`Remate`,`Velocidad`,`Regate`],
           equiposAnteriores:[`Barcelona`,`PSG`],
           obtenerNombreCompleto:function(){
               return `El nombre completo de este jugador es ${this.nombre} ${this.apellido}`
           },
           actualizarEquipo: function(nuevoEquipo){
               this.equiposAnteriores.push(this.equipo)
               this.equipo=nuevoEquipo;
               
           }
       },
       {
           nombre:`Lamine`,
           apellido:`Yamal`,
           dorsal:7,
           edad:17,
           equipo:`Barcelona`,
           habilidades:[`Regate`,`Remate`,`Velocidad`],
           equiposAnteriores:[],
           obtenerNombreCompleto:function(){
               return `El nombre completo de este jugador es ${this.nombre} ${this.apellido}`
           },
           actualizarEquipo: function(nuevoEquipo){
               this.equiposAnteriores.push(this.equipo);
               this.equipo=nuevoEquipo;
               
           }
       }
      
      ],
      equipoAFiltrar:null,
      filtrarAJugador:function(){
         return this.listaJugadores.filter((itemListajugadores)=>{
          return itemListajugadores.equipo== this.equipoAFiltrar
        })
      }
   }
  
   
   jugadores.equipoAFiltrar=`Inter Miami`;
   console.log(jugadores.filtrarAJugador());



   
