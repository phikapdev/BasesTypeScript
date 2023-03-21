/*
    ===== Código de TypeScript =====
*/

interface PersonajeLOR {
    nombre: string
    pv: number
    mostrarHp: () => void

}

function curar(personaje: PersonajeLOR, curarPuntos: number): void{
    personaje.pv += curarPuntos
    console.log(personaje);
    
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv);
        
    }
}

curar(nuevoPersonaje, 20)

nuevoPersonaje.mostrarHp()