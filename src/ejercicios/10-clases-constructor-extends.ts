class PersonaNormal {
    
    constructor(
        public nombre: string, 
        public direccion: string
    ) {}
    
}

class Heroe extends PersonaNormal {

     constructor(
       public alterEgo: string,
       public edad? : number,
       public nombreReal?: string
     ){
        super(nombreReal, 'New York, US')
     }
}

const ironman = new Heroe('Iroman', 31, 'Tony')

console.log(ironman);
