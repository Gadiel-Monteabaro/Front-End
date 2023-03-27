// rest operator
const rest = (a, ...args) => { // rest, ultimo parametro.
    console.log(a);
    console.log(args);
}
rest(1, 2, 3); // 1 [2,3]

// objetos

const obj = {
    a: 1, b: 1, c: 1, d: 1
}

// obtenemos todas las propiedades que no son llamadas.
const { n1, n2, ...restN } = obj; // destructuring

//console.log(a, b, restobj);

const arr = [1, 2, 3, 4, 5];

const [a, b, ...n] = arr; // destructuring

console.log(a, b, n);

// destructuring function
const useState = () => ['Valor', () => { }];

const [valor, sum] = useState();

console.log(valor, sum);