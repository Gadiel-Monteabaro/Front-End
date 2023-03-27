import logo from './logo.svg';
// import './App.css';
import './main.css';

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.3)'
}

const estilo = ({ bg = '#456' }) => ({
  backgroundColor: bg,
  color: '#fff',
  width: '50%',
  padding: '10px 15px',
  margin: '16px auto',
  borderRadius: '10px',
  listStyle: 'none'
})

const Li = ({ children, estado }) => {
  return (
    <li className='clase-li'>{children} {estado}</li>
  )
}

function App() {
  const valor = 'Feliz'
  return (
    <ul className='clase-css'>
      <Li>Chanchito {valor}</Li>
      <Li estado='Triste'>Chanchito</Li>
    </ul>
  );
}

export default App;