// let numero = 23
// let variasCosas = [23, true, 'Jaime', function(){}, [], numero]
// let otroArreglo = []
// console.log(variasCosas[0] * variasCosas[5])
// console.log(variasCosas[1])
// console.log(variasCosas[5])
// console.log(variasCosas[3])
// console.log(otroArreglo)

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let iterador = 0; iterador < numeros.length; iterador++) {
//     // console.log(numeros[index])
//     if (numeros[iterador] % 2 == 0) {
//         console.log(numeros[iterador] * 4)
//     }
// }


let nombres = []
for (let index = 0; index < 5; index++) {
    nombres[index] = prompt('Ingrese su nombre: ')
}
for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index])
}