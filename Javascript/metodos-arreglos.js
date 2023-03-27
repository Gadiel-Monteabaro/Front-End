// Filter
const arr = [4, 1, 5, 3, 4];

// para recorrer contenido, elementos que no queremos mostrarle al usuario.
const f = arr.filter((el, i) => {
    return el > 2;
}); // devuelve valores verdaderos.

//console.log(f);

// Map
// se utiliza para imprimir valores en react.
const m = arr.map(el => el * 2);
// console.log(m);

const users = [
    { id: 1, name: 'Chanchito feliz' },
    { id: 2, name: 'Chanchito triste' },
    { id: 3, name: 'Chanchito emocionado' },
    { id: 4, name: 'Chanchito enojado' }
];

const mapped = users.map(user => user.name);
// console.log(mapped);

// Reduce
// tomara todos los elementos de un arreglo y devolvemos lo que queramos.
const r = arr.reduce((acc, el) => acc + el, 0);
// Se utiliza de manera flexible, se puede usar reduce, en vez de map o filter.
// console.log(r);

const getMax = (a, b) => Math.max(a, b);
const g = arr.reduce(getMax); // El valor del acc inicial siempre es cero.
// console.log(g)

const u = users.reduce((acc, el) =>
    `${acc === '' ? '' : `${acc}, `}${el.name}`, '');
// console.log(u);

const l = users.reduce((acc, el) => {
    if (el.id < 2) {
        return acc;
    }
    return acc.concat(el);
}, []);

console.log(l);