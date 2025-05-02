
let jugador={
    nombre:`Cristiano`,
    apellido:`Ronaldo`,
    dorsal:7,
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
}

 
 console.log(jugador)
 jugador.actualizarEquipo("Al Nasser");
 console.log(jugador);
 