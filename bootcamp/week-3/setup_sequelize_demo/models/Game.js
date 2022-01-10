//import my database, DataTypes, Model
const {db, DataTypes, Model} = require('../db')

//create a child class
class Game extends Model {}

//.init <- create a table 'model'
Game.init({
    name: DataTypes.STRING,
    platform: DataTypes.STRING
},{
    sequelize: db
})

//export this model
module.exports = {Game}