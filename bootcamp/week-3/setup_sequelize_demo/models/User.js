const {db, DataTypes, Model} = require('../db')

//create a child class from Model
class User extends Model {}

//define our model by using the method .init
User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize: db
})

//export this model
module.exports = {User}