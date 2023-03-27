const fn = (a, b, c) => console.log(a + b + c)

const arr = [1, 2, 3]

fn(...arr); // spread operator 

const arr1 = [5, 6]

const arr2 = [...arr, ...arr1, 2, 9];
const arr3 = arr

arr[0] = 'chanchito feliz'

//console.log(arr, arr2, arr3);

// Objetos

const obj1 = { a: 1, b: 2 }
const obj2 = { b: 5, c: 'chanchito feliz' }
const obj3 = { ...obj1 }

obj1.a = 10;

const obj4 = { ...obj1, ...obj2 } // los valores de las propiedades del obj1 son modificados por las del obj2

const obj5 = {
    ...obj1,
    ...obj2,
    loading: true
}

console.log(obj5)