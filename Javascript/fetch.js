// Fetch Api
// Es una fuincionalidad implementada en js, especificamente en el explorador (no corre en Node), nos permiote obtener datos de una URL, mediante llamados GET, POST, PUT, PATH,etc. Con sintaxis intuitiva y facil de seguir.

const url = 'https://jsonplaceholder.typicode.com/users';

// recibe dos argumentos, la url(mandatoria) y la segunda es un objeto de configuracion.
fetch(url)
    .then((response) => response.json())
    .then(data => console.log(data))

// Los dos metodos importantes, son text y json, estos trabajan con promesas

// Post 
//fetch(url, {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json',
//        'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
//    },
//    body: JSON.stringify({
//        name: 'Chanchito feliz',
//        website: 'google.com'
//    })
//})
//    .then((response) => response.json())
//    .then(data => console.log(data))
//

// Con este metodo, podemos enviar multiples datos al servidor
// body => datos que nosotros queremos utilizar, actualizat, etc
// headerS => para indentificarnos. y para indicar que tipo de contenido a enviar con "content-tupe" 

const fn = async () => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
        },
        body: JSON.stringify({
            name: 'Chanchito feliz',
            website: 'google.com'
        })
    })
    const data = await response.json() //
    console.log(date);
}
fn();