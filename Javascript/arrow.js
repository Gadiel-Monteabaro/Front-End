function Fn() { // Clase Fn
    // { prop: "Chanchito Feliz" };    
    this.prop = "Chanchito Feliz";
    console.log(this); // objeto global basado en Fn
}

// Las funciones pueden tener un contexto de this y podemos utilizarlo para implementar herencia basada en prototipos.
// Las funciones tambien son clases en js, pero basadas en prototipos, con la palabra function.
Fn.prototype.test = function funcionDePrueba() { };

const r = new Fn(); // Instanciamos la clase Fn.
console.log(r.__proto__);

// Arrow Functions
//  Las arrow function no pueden ser llamadas con la palabra reservada de new.
const fatFn = () => {
    return ('Las arrow function no tienen contexto de this.')
}

const r1 = fatFn();
console.log(r1);

// Return implicito.
const num = () => 2;