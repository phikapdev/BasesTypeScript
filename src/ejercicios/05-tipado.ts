
interface SuperHeroe{
    nombre: string
    edad: number
    direccion: {
        ciudad: string
        pais: string
        calle: string
    }
    mostrarDireccion: () => string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Man St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais
    }
}

const direccion = superHeroe.mostrarDireccion()
console.log(direccion);
