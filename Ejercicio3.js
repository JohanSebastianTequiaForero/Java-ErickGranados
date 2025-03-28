function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento);  
    return arreglo.shift();  
}

let numeros = [1, 2, 3, 4, 5];
console.log(proximoEnLaFila(numeros, 6));  
console.log(numeros);