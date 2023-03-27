//  React => Es una biblioteca de codigo abierto diseñada para crear interfaces de usuario   

// Una biblioteca es un conjunto de implementaciones o subprogramas que podemos usar en nuestro codigo.

// Componente => Parte de la interfaz de usuario que es independiente y reusable. Los componentes actuan como legos que podemos combinar para contruir nuestra app, hay dos tipos de componentes.

// Componentes Funcionales => Funcion de JavaScript/ES6 que retorna un elemento de React(JSX).

function Saludo(props) {
    return <h1>¡Hola,{props.nombre}!</h1>
    // Esto funciona como una combinacion entre javascript y html. llamado JSX.
    // Debe retornar un elemento de React(JSX)
    // Debe comenzar con una letra mayuscula.
    // Puede recibir valores si es necesario
}

// Props => Argumentos que puede recibir un componente de React.
// Los props solo pueden enviarse de Padre a Hijo

// Componentes de Clase => Clase de ES6 que retorna un elemento JSX

class Saludo extends React.Component {
    render() {
        return <h1>¡Hola, {this.props.nombre}!</h1>
        // Debe extender React.Component
        // Debe tener un metodo render(), para retornar un elemento JSX
        // Puede recibir valores si es necesario 
    }
}

// Estado (state) => Representacion en JS, del conjunto de propiedades de un componente y sus valores actuales (informacion que se representa sobre el componente).

// Hooks => Funcion especial que permite trabajar con estado en componentes funcionales. Podemos assignar y actualizar el estado de un componente funcional en React con los hooks. Sin esccribir un componente de clase. Esto nos permite escribir codigo mucho mas conciso y facil de entender.

// Evente Listener => Funcion en JS que es ejecutada cuando ocurre un evento especifico