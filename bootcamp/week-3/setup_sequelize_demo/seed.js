//import dependencies that will help me parse my json file
const path = require('path')
const fs = require('fs').promises //will help me resolve and or reject promises as we use sequelize methods

//import our database
const {db} = require('./db')
//import our model
const {Game, User} = require('./models/index') //[x]

//All sequelize methods return promises -> 

//define our seed function
const seed = async () => {
    //clear out our tables -> prevents us from making duplicates
    await db.sync({force: true})

    //find our .json file -> parse the data -> JS OBJECT -> Access the array -> create a new row with each element of the array
    const seedPath = path.join(__dirname, 'games.json') 
    const seedPath2 = path.join(__dirname, 'users.json') // [X]
    
    //Games
    const buffer = await fs.readFile(seedPath) //reads information that lives in that path
    const {data} = JSON.parse(String(buffer)) // convert the JSON string Object -> JS Object

    //Users
    const buffer2 = await fs.readFile(seedPath2) //reads information that lives in that path // [X]
    const {data2} = JSON.parse(String(buffer2)) // convert the JSON string Object -> JS Object // [X]

    //1. iterate through our array
    //2. Sequelize method : Model.create(row)
    //3. resolve/reject .all [Promise<pending>,Promise<pending>,Promise<pending>...]
    const gamePromises = data.map(game => Game.create(game))
    const userPromises = data2.map(user => User.create(user)) // [X]

    await Promise.all(gamePromises) //The Promise.all() method takes in an iterable of promises as an input, and returns a single Promise that resolves or rejects
    await Promise.all(userPromises) // [X]

    console.log(`All of our Games and Users have been successfully populated into our database!`)
}



//invoke our seed function
seed()

//export our seed function
module.exports = seed;