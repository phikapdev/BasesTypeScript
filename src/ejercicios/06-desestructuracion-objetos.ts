
interface Reproductor {
    volumen: number
    segundo: number
    cancion: string
    detalles: Detalles
}

interface Detalles {
    autor: string
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015,
    }
}

console.log('El Volumen Actual es: ', reproductor.volumen);
console.log('El Segundo Actual es: ', reproductor.segundo);
console.log('La Cancion Actual es: ', reproductor.cancion);
console.log('El Autor Actual es: ', reproductor.detalles.autor);

const {volumen, segundo, cancion, detalles} = reproductor
const {autor} = detalles

console.log('El Volumen Actual es: ', volumen);
console.log('El Segundo Actual es: ', segundo);
console.log('La Cancion Actual es: ', cancion);
console.log('El Autor Actual es: ', autor);