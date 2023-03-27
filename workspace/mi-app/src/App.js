import { Component } from 'react'
import './main.css';

class Button extends Component {
    state = {}
    constructor(props) {
        super(props)
        console.log('constructor', props)
    }

    componentDidMount(){
        console.log('Comoponenses')
    }

    render() {
        console.log('Ejecutando metod render button')
        return (
            <button>Enviar</button>
        )
    }
}

class App extends Component {
    state = {
        valor: 'hola'
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <p>Hola Mundo!</p>
                <Button chanchito='Feliz' />
                <button
                    className={`${this.state.valor}`}
                    onClick={() => this.setState({ valor: 'chau' })}>Enviar en App</button>
            </div>
        )
    }
}

export default App