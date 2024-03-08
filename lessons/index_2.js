let person1 = {
    name: 'Max',
    vehicle:'car',
    town:'Paris'
}

let person2 = {
    name: 'Nathalie',
    vehicle:'bike',
    town:'Bordeaux'
}

let person3 = {
    name: 'Cathy',
    vehicle:'car',
    town:'Lyon'
}

// écrire la condition pour afficher "{Un tel} a une voiture"

let personToTest = person1

if (personToTest.vehicle === 'car') {
    console.log(`${personToTest.firstname} a une voiture.`)
} else () {
    console.log(`${personToTest.firstname} n'a pas de voiture.`)
}