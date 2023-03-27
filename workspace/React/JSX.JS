// JSX => Es una extension de React para la sintaxis de JS
// Nos permite describir en JS como se veran los componentes usando una estructura similar a HTML.

const element = <h1>¡Hola, Mundo!</h1>
// JSX, nos permite combinar html con JS.

// Elemento => Unidades mas pequeñas en React, Definen lo que se ve en la pantalla
// Los componentes en React estan echos de elementos.

// React DOM => Paquete que facilita la interaccion y actualizacion de DOM en aplicaciones React
// DOM => Document object model, Representacion en el navegador de todos los elementos que conforman nuestra pagina web.

// En JSX, los elementos HTML se representan en minusculas
// Los componentes empiezan con una letra mayuscula.

//  Estructura, los elementos pueden ser anidados.

import ReactDOM from "react-dom";

const elemento = <h1>¡Hola, Mundo!</h1>

ReactDOM.render(
    elemento,
    document.getElementById('root')
) 