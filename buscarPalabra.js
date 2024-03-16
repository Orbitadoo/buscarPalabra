// Escribe una función llamada buscarPalabra que tome dos parámetros: una palabra para buscar y una matriz de palabras. La función debería devolver true si la palabra buscada está presente en la matriz y false en caso contrario. Utiliza un bucle for o un método de array para realizar la búsqueda.

function buscarPalabra(palabraBuscada, palabras) {
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabraBuscada) {
            return true;
        }
    }
    return false
}

let palabras = ["perro", "gato", "elefante", "javalí"];
let palabraBuscada = "elefante";
console.log(buscarPalabra(palabraBuscada, palabras))