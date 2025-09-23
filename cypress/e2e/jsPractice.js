// INVERTIR ARRAY

const arr = [1,2,3,4,5]
let inv = []

for(let i = arr.length -1; i >= 0 ; i--){
    inv.push(arr[i])
    console.log(inv)
}

//Checkear palíndromo

function esPalindromo(word) {
    let inv = word.split("").reverse().join("")
    if (inv == word) {
         console.log(word + ' es un palíndromo')
    }else{
         console.log(word + ' no es un palíndromo')
    }
}

esPalindromo("hola")
esPalindromo("ana")


//Buscar cuantas vocales hay en una palabra

const word = "automation"
let contador = 0
for(let letra of word){
    if("aeiou".includes(letra)){contador++}
}
console.log(word + ' tiene ' + contador + ' vocales')




//Invertir array 2
const array = ["A","B","C","D","E"]
const invertido = []
for(let counter = array.length-1; counter >= 0;counter--)
{
    invertido.push(array[counter])
}
console.log(invertido)

//Mayor valor de un array
const arrayMayor = [3,5,6,4,9,3,6]
let mayorNumero = 0
for(i = array.length-1;i>=0;i-- ){
    if (arrayMayor[i] > mayorNumero){
        mayorNumero = arrayMayor[i]
    }
}
console.log("El número más grande del array es: " + mayorNumero)


//Buscar cuantas consonantes hay en un array

const arrc = ["l","k","a","a","c","e","k"]
let countc = 0;
for(i = arrc.length -1; i>=0 ; i--){
    if(!"aeiou".includes(arrc[i])){
        countc++;
    }
}
console.log("El array tiene " + countc + " consonantes")