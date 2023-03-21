import { Producto, calculaISV } from './08-desestructuracion-argumentos'

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 200
    }
]

const [isv, total] = calculaISV(carritoCompras)

console.log('Total: ', total);
console.log('ISV: ', isv);
