// console.log("Je m'appelle Dann");

var myNumber = 31

// console.log(myNumber);

/* This is an explanation about variables
This is an explanation about variables
This is an explanation about variables
This is an explanation about variables
This is an explanation about variables
*/

var myName = "Dann"

// console.log(myName)

let myLastname = "Dieulouard"
const myAge1 = 31
let myAge2 = 40

myAge2 = 21


// console.log(myAge2)

// MANIPULATION DES NOMBRES
let firstNb = 23
let result = firstNb + 12
// result = result + 10
result += 10

result -= 5
// result = result * 2 
result *= 2
result /= 8

// console.log(result)

result = 14
const moduloResult = result % 3
// console.log(moduloResult)

// LES CHAINES DE CARACTERE

const firstName = "Paul"
const lastName = 'Doazan'

const sentence = 'Je m\'appelle Paul'

// ES6 => 2015 Javascript moderne
const presentation = `Je m'appelle Paul`

// let fullName = firstName + ' - ' + lastName

let fullName = `${firstName} --- ${lastName}`
//console.log(fullName)

let name1 = "J'habite à "
// name1 = name1 + 'Mérignac'
name1 += "Mérignac !"
//console.log(name1)

let myTown = "Bordeaux"
let myArea = 33

const result2 = myTown + myArea
//console.log(result2)

// LES BOOLEENS

let myBoolean = true
let myBoolean2 = false

// if (myBoolean2) {
// console.log('ma condition est vraie')
// } else {
//    console.log('ma condition est fausse')
// }

let myCurrentAge = "18"
let legalAgeToDrive = 18

// Opérateurs de comparaison : >, >=, <, <=, ==, === (triple égal teste le type de variable également)

// if (myCurrentAge === legalAgeToDrive) {
//     console.log('Tu as le droit de conduire')
// } else {
//     console.log(`Tu n'as pas le droit de conduire`)
// }

// if (myCurrentAge > legalAgeToDrive) {
//     console.log('Tu as le droit de conduire')
// } else if (myCurrentAge < legalAgeToDrive) {
//     console.log(`Tu n'as pas le droit de conduire`)
// } else if (myCurrentAge === legalAgeToDrive) {
//     console.log(`Tu as tout juste le droit de conduire`)
// } else {
//     console.log(`Dernière condition`)
// }

// 
// let age1 = 12
// let age3 = 23
// let age4 = 30
// let age5 = 70

// Ecrire 4 conditions chaînées pour afficher les résultats suivants :
// "Tu as 10 ans ou moins"
// "Tu as entre 11 et 30 ans"
// "Tu as entre 31 et 50 ans"
// "Tu as plus de 50 ans"

// if (age5 <= 10) {
//     console.log('Tu as 10 ans ou moins')
// } else if (age5 <= 30) {
//     console.log(`Tu as entre 11 et 30 ans`)
// } else if (age5 <= 50) {
//     console.log(`Tu as entre 31 et 50 ans`)
// } else {
//     console.log(`Tu as plus de 50 ans`)
// }

// Variable Complexe : les Objets

const myIdentity = {
    firstname : "Paul",
    lastname : "Doazan",
    age : 35,
    town : "Bordeaux",
}
// console.log(myIdentity.firstname)

const fullNameFromIdentity = `myIdentity.firstname + ' ' + myIdentity.lastname`
// console.log(fullNameFromIdentity)

// EXO suivant : écrire la phrase à partir de l'objet myIdentity " Bopnjour je m'appelle ..., j'ai ..., et j'habite ..."

// let mypresentation = `Bonjour je m'appelle ${myIdentity.firstname + ' ' + myIdentity.lastname}, j'ai ${myIdentity.age} ans, et j'habite ${myIdentity.town}.`
// console.log(mypresentation)

// Difficulté supplémentaire:
// Ajoute une variable "adulte"
// Ajoute un test, si l'âge est inférieur à 18, change la variable en "enfant"
// Concatène cette variable à la fin de la phrase avec "et je suis un ..."

let res = `Bonjour je m'appelle ${myIdentity.firstname + ' ' + myIdentity.lastname}, j'ai ${myIdentity.age} ans, j'habite ${myIdentity.town} `


let adult = "adulte"

if (myIdentity.age < 18) {
    adult = "enfant"
}

res += `et je suis un ${adult}.`
console.log(res)

//
const person1 = {
    firstname : "Paul",
    lastname : "Doazan",
    age : 35,
    town : "Marseille",
}

const person2 = {
    firstname : "Pierre",
    lastname : "Doazan",
    age : 17,
    town : "Bordeaux",
}

const person3 = {
    firstname : "Mathilde",
    lastname : "Doazan",
    age : 15,
    town : "Paris",
}

const person4 = {
    firstname : "Simon",
    lastname : "Doazan",
    age : 15,
    town : "Nantes",
}

// écrire le test pour savoir si la personne habite à Bordeaux

let personToTest = person1

// if (personToTest.town === "Bordeaux") {
//     console.log(`${personToTest.firstname} habite à Bordeaux`)
// } else {
//     console.log(`${personToTest.firstname} n'habite pas à Bordeaux`)
// }

// écrire le test pour savoir si la personne est un mineur qui habite à Bordeaux => &&

// if (personToTest.town === "Bordeaux" && personToTest.age < 18) {
//     console.log(`${personToTest.firstname} est un mineur qui habite à Bordeaux`)
// } else {
//     console.log(`${personToTest.firstname} n'est pas mineur ou n'habite pas à Bordeaux`)
// }

// écrire le test pour savoir si la personne habite à Paris OU à Marseille OU Bordeaux ==> ||

if (personToTest.town === "Paris" || personToTest.town === "Marseille" || personToTest.town === "Bordeaux") {
    console.log(`${personToTest.firstname} habite à Paris ou Marseille ou Bordeaux.`)
} else {
    console.log(`${personToTest.firstname} n'habite ni à Paris ni à Marseille ni à Bordeaux.`)
}

// Les Tableaux : Array

let myArray = ["Sara", "Alice", "Antoine", "Stéphane"]

let fName = myArray[0]
console.log(fName)

// "Sara, Alice et Stéphane sont partis"

console.log(`${myArray[0]}, ${myArray[1]} et ${myArray[3]} sont partis.`)

let myArrayOfObjects = [
    {name: 'Sara', gender:'f', age: 12},
    {name: 'Alice', gender:'f', age: 19},
    {name: 'Antoine', gender:'m', age: 25},
    {name: 'Stéphane', gender:'m', age: 15},
]

let objectToTest = myArrayOfObjects[1]
let gone = "parti"

if (objectToTest.gender == 'f') {
gone += 'e'
}

console.log(`${objectToTest.name} est ${gone} !`)