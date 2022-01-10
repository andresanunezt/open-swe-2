//import dependencies that will help me parse my json file
const path = require('path')
const fs = require('fs').promises //will help me resolve and or reject promises as we use sequelize methods

//import our database
const {db} = require('./db')
//import our model
const {Game} = require('./models/Game')

//All sequelize methods return promises -> 

//define our seed function
const seed = async () => {
    //clear out our tables -> prevents us from making duplicates
    await db.sync({force: true})

    //find our .json file -> parse the data -> JS OBJECT -> Access the array -> create a new row with each element of the array
    const seedPath = path.join(__dirname, 'games.json') 
    
    const buffer = await fs.readFile(seedPath) //reads information that lives in that path
    const {data} = JSON.parse(String(buffer)) // convert the JSON string Object -> JS Object

    //data
    // [
    //     {"name": "FF7", "platform": "PS1"},
    //     {"name": "Spyro", "platform": "PS1"},
    //     {"name": "Metroid", "platform": "SNES"},
    //     {"name": "Street Fighter", "platform": "PS1"},
    //     {"name": "Animal Crossing", "platform": "SWTICH"}
    // ]

    //1. iterate through our array
    //2. Sequelize method : Model.create(row)
    //3. resolve/reject .all [Promise<pending>,Promise<pending>,Promise<pending>...]
    const gamePromises = data.map(game => Game.create(game))

    await Promise.all(gamePromises) //The Promise.all() method takes in an iterable of promises as an input, and returns a single Promise that resolves or rejects

    console.log(`All of our Games have been successfully populated into our database!`)
}



//invoke our seed function
seed()

//export our seed function
module.exports = seed;