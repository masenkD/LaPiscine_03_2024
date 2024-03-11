






// array.length, index

// let obj = {}
let arr = ["Dann","Sami","Karim"]
let result = ""

// écrire la chaine de caractère "Dann, Sami et Karim, assistent au cours de Javascript"

for (let index = 0; index < arr.length ; index++) {
    if(index === arr.length - 1){
        result += arr[index] + " "
    } else if (index === arr.length - 2) {
        result += arr[index] + " et "
    } else {
        result += arr[index] + ", "
    }
    }

result += "assistent au cours de Javascript."

// console.log(result)

let numbers = [3, 1, 21, 13, 15, 8, 7]
let total = 0

//  A l'aide d'un parcours de tableau, calculer la somme totale du tableau

for (let ind = 0; ind < numbers.length; ind++) {
    total += numbers[ind]
}
// console.log(total)

//  A l'aide d'un parcours de tableau, calculer la somme de la première moitié du tableau et la somme de la seconde moitié du tableau

let total_1 = 0
let total_2 = 0

for (let ind = 0; ind < numbers.length; ind++) { 
        if (ind <= numbers.length / 2) {
        total_1 += numbers[ind]
        } else {
        total_2 += numbers[ind]
        }
    }

// console.log(total_1, total_2)


