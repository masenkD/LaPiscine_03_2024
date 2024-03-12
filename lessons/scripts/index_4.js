// let arrNumbers_1 = [2, 7, 3, 1, 4]
// let arrNumbers_2 = [12, 17, 13, 11, 14, 31, 6, 28]

// écrire la fonction qui retourne le minimum d'un tableau passé en paramètre

// let min_1 = getMinimum(arrNumbers_1)
// let min_2 = getMinimum(arrNumbers_2)
// console.log(min_1,min_2)

// function getMinimum(arr) {
//     let resultMinimum = arr[0]

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < resultMinimum) {
//             resultMinimum = arr[i]
//         }
//     }
//     return resultMinimum
// }

// Retour à l'IMC

// Calcul de l'IMC

const person_1 = {
    name: "Dann",
    size: 1.83,
    weight: 75
}

const person_2 = {
    name: "Marc",
    size: 1.92,
    weight: 86
}

const person_3 = {
    name: "Sophie",
    size: 1.70,
    weight: 65
}

const person_4 = {
    name: "Julie",
    size: 1.65,
    weight: 67
}

// formule de l'IMC : poids / taille * taille

// écrire la fonction qui retourne l'IMC d'une personne.
// afficher en console "Un tel a une IMC de ..."

// logIMC(person_1)
// logIMC(person_2)
// logIMC(person_3)
// logIMC(person_4)

function getIMC(param) {
    let imc = Math.round (param.weight * 100 / (param.size * param.size)) / 100
    return imc
}

function logIMC (person) {
    let imc = getIMC(person)
    console.log(`${person.name} a un IMC de ${imc}`)
}

// Exercice++
// const people = [person_1, person_2, person_3; person_4]
// Ecrire une nouvelle fonction qui prend en paramètre le tableau d'objets ci-dessus et retourne l'objet de la personne qui a l'IMC la plus élevée

const people = [person_1, person_2, person_3, person_4]
const result_imc = biggestIMC(people)
// console.log(result_imc)

function biggestIMC(arr){
    let maxImc = getIMC(arr[0])
    let maxImcPerson = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (getIMC(arr[i]) > maxImc) {
            maxImc = getIMC(arr[i])
            maxImcPerson = arr[i]
        }
    }
    return maxImcPerson
}

// INTERACTION AVEC LE DOM

const container = document.querySelector(".container")
const btnsArray = document.querySelectorAll(".btn")

for (let i = 0; i < btnsArray.length; i++) {
    btnsArray[i].isClicked = false
    btnsArray[i].addEventListener("click", onBtnClick)
}


// Exercice : quand on clique sur un bouton, on change la couleur du container de façon aléatoire
// pour générer de l'aléatoire : Math.random => 0 < nb < 1 
// en css, on passera une couleur en rgb ()

function onBtnClick(e) {
    e.currentTarget.isClicked = !e.currentTarget.isClicked
    // container.style.backgroundColor = e.currentTarget.textContent
    container.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    // e.currentTarget.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    
    if(e.currentTarget.isClicked) {
        e.currentTarget.style.transform = "rotate(180deg)"
  } else {
        e.currentTarget.style.transform = "rotate(0deg)"
  }
    }

//  Dernier exercice : en cliquant sur 1 bouton, on change la couleur de chacun des trois boutons avec 3 couleurs aléatoires différentes

for (let i = 0; i < btnsArray.length; i++) {
    btnsArray[i].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}


