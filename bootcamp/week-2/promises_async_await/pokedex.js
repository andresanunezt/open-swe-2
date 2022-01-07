//Prompt:
// The getRandomPokemon() function should generate a chance to catch a random pokemon using the fetch method. Use the hint below to think about how you can get a ‘random’ pokemon. Think about how you want to return this pokemon! [hint: maybe create your own object with the return JSON)

// The catchEm() method should return a promise where there should be a 25% chance that you will catch the pokemon but your chances will increase to 75% if you use a masterball. If you successfully capture this pokemon, your promise should insert this pokemon to some sort of ‘data-base’. [Hint: Use either an Object or an Array]




// Your pokeDex() method should be able to look-up this pokemon if you’ve caught it and return information about this pokemon.
import fetch from 'node-fetch' //import dependencies

//pokemon storage
let caughtPokemon = {}

//generate a random pokemon
function getRandomPokemon() {
    //generate a random number from 1-151
    let randomNum = Math.floor(Math.random() * 151) 
    return fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`).then((res) => {
      return res.json() // JSON string obj -> JS Object   
    }).then((data) => {
        //console.log(data.forms)
        return data.forms
    }).catch(() => {
        console.log('pokemon not found')
    })
}



function catchEm(pokemon, pokeball) {
    //return a promise .then -> store the pokemon into the obj
    //.catch callback -> `you missed`
    //generate a random number -> 1-100
    return new Promise((resolve,reject) => {
        let probOfCatching = Math.floor(Math.random() * 100)

        //pokeball -> num <= 25
        if(pokeball === 'pokeball') {
            if(probOfCatching <= 25){
                resolve(pokemon)
            } else {
                reject()
            }
        }
        //masterball -> num <= 75
        if(pokeball === 'masterball') {
            if(probOfCatching <= 75){
                resolve(pokemon)
            } else {
                reject()
            }
        }
    })

}



function pokeDex(pokemon) {
    if(caughtPokemon[pokemon.name]) {
        let info = pokemon
        console.log(`You've caught ${caughtPokemon[pokemon.name]} of ${pokemon.name}, here is some information about this pokemon: ${info}`)
    }
}


let randomPokemon = getRandomPokemon().then((data) => {
    console.log(data)
})


catchEm(randomPokemon, 'masterball').then((pokemon) => {
    //store the pokemon into our obj
    //[{name:'',imgURL:''}]
    let pokemonName = pokemon[0].name 
    if(caughtPokemon[pokemonName]) {
        caughtPokemon[pokemonName]++
    } else {
        caughtPokemon[pokemonName] = 1
    }
    console.log(`Your current Pokemons: ${JSON.stringify(caughtPokemon)}`)
}).catch((err) => {
    console.error(`you missed! ${err}`)
})

// pokeDex(randomPokemon)