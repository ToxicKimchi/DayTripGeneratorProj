"Use Strict";

/*
(5 points): As a developer, I want to make at least three commits with descriptive messages.
(5 points): As a user, I want a destination to be randomly selected for my day trip.
(5 points): As a user, I want a restaurant to be randomly selected for my day trip.
(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
(10 points): As a user, I want to display my completed trip in the console.
(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!
*/

function Randomizer(toBeRandom, currentSelection) {
    let upperInt = toBeRandom.length
    let randomSelection = toBeRandom[Math.floor(Math.random() * upperInt)]
    if (randomSelection == currentSelection){
        return(Randomizer(toBeRandom, currentSelection))
    }
    else{
        return(randomSelection)
    }

}

let destinations = ['Cuba', 'Jamaica', 'Hawaii', 'Britain', 'Miami, Florida']
let restaurants = ['Italian', 'Mongolian', 'Greek', 'Mcdonalds', 'Pizza']
let transport = ['Bus', 'Rent a car', 'Walk', 'Train']
let entertainment = ['Hula', 'Tours', 'Burlesque', 'Feasts']


function reRoll(toBeRandom) {

}


function dayTripChange(array, currentSelection) {
    let selectionLength = "Please enter the number corresponding to the entry that you would like to change to:";
    for (i in array){
        selectionLength += `\n${parseInt(i) + 1} = ${array[i]}`
    }
    selectionLength += `\n${parseInt(array.length) + 1} = randomize`

    let newSelection = prompt(selectionLength)
    if (newSelection == (parseInt(array.length) + 1)){
        return(Randomizer(array, currentSelection))
    }
    else if (newSelection <= (parseInt(array.length))){
        console.log(newSelection)
        return(array[(parseInt(newSelection) - 1)])
    }
    else{
        alert("You did not enter a pre-ordained command, returning to main menu")
        return(currentSelection)
    }
}


let dtDestination = Randomizer(destinations)
let dtRestaurant = Randomizer(restaurants)
let dtTransport = Randomizer(transport)
let dtEntertainment = Randomizer(entertainment)
let acceptance = false;

function dayTripDisplay() {
    switch (prompt(`1. Destination = ${dtDestination}\n2. Restaurant = ${dtRestaurant}\n3. Transportation = ${dtTransport}\n4. Entertainment = ${dtEntertainment}\nIf you are satisfied with these selections please type (Y)es\nIf you would like to edit an aspect pleast type the corresponding Number.`).toLowerCase()) {
        case 'yes':
        case 'y':
            alert(`Final:\nDestination = ${dtDestination}\nRestaurant = ${dtRestaurant}\nTransportation = ${dtTransport}\nEntertainment = ${dtEntertainment}`)
            console.log(`Final:\nDestination = ${dtDestination}\nRestaurant = ${dtRestaurant}\nTransportation = ${dtTransport}\nEntertainment = ${dtEntertainment}`)
            return (acceptance = true)
        case '1':
            dtDestination = dayTripChange(destinations, dtDestination);
            break;
        case '2':
            dtRestaurant = dayTripChange(restaurants, dtRestaurant);
            break;
        case '3':
            dtTransport = dayTripChange(transport, dtTransport);
            break;
        case '4':
            dtEntertainment = dayTripChange(entertainment, dtEntertainment);
            break;
        case null:
            return ( acceptance = true)
        default:
            console.log()
            alert("Please input one of the provided entries")
            break;
    }
}

while (acceptance == false){
    dayTripDisplay()
}

