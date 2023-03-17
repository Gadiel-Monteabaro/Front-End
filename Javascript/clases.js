//const rectangulo = class R {
//Expresion de clase
//};

// otra forma de crear una clase

// clases declaradas con class, no tienen hoisting.
class Rectangulo {
    // Declaracion de clase
}

const r = new Rectangulo() // Instancia de clase

// clases declaradas con funciton, si tienen hoisting
function rectangulo() { }

class Chancho {
    #hambre // propiedad privada, los campos tienen que ser definidos.
    propiedad = "Mi Propiedad";
    static estatico = 42;
    constructor(estado = 'Feliz', hambre = false) {// Es el metodo que siempre se va a instanciar cuando llamemos a una clase.
        this.estado = estado; // this es un objeto global de la clase Chancho.
        this.#hambre = hambre;
    }

    hablar() {
        console.log(`Soy un chancho ${this.estado}, ${this.#hambre ? 'Tengo mucha hambre' : 'Sastifecho'}`);
    }

    static comer() { // Es un metodo que solo se puede acceder atraves de la clase y no es necesario iniciar una instancia de clase
        // Los metodos staticos no pueden acceder a las propiedades de una clase, ya sean publicas o privadas.
        // Para poder acceder a una propiedad de nuestra clase, tenemos necesariamente que definirla como static a la propiedad.
        console.log(this.estatico, 'estoy comiendo!');
    }
}

Chancho.comer();

const feliz = new Chancho(); // Instancia de clases.
n