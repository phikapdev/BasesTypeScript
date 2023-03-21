
function ClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      rnewProperty = "new Property"
      hello = "override"
    };
  }

@ClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123'

    imprimir(){
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase()

console.log(miClase.miPropiedad);

