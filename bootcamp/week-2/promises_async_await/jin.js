import fetch from 'node-fetch'

class Player {
    constructor(pokeballs, masterballs){
        this.pokeballs = pokeballs
        this.masterballs = masterballs
        this.pokedex = []
    }

  const fetchPokemon = async () => {
    const randomPokemon = Math.floor(Math.random() * 152)
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
      )
      const data = await res.json() //json string object to js object
      // console.log(data.forms)
      return data.forms
    } catch (error) {
      throw error
    }
  }

  static catchEm(pokemon, pokeball) {
    let probOfCatching = Math.floor(Math.random() * 100)
    // console.log(pokemon)

    if (pokeball === 'pokeball') {
      if (probOfCatching <= 75) {
        let pokemonName = pokemon[0].name
        if (this.pokedex[pokemonName]) {
          this.pokedex[pokemonName]++
        } else {
          this.pokedex[pokemonName] = 1
        }
        console.log(`You caught ${pokemonName}`)
      } else {
        console.log('You missed!')
      }
    }
  }
}

let getRandomPokemon = Player.fetchPokemon()
  .then((data) => {
    console.log(data)
    return data
  })
  .catch((error) => {
    console.error(error)
  })
console.log(Player.catchEm(getRandomPokemon, 'pokeball'))
// console.log(getRandomPokemon)

// console.log(Player.fetchPokemon())