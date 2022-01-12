const {sequelize, DataTypes, Model} = require('./db');

class Musician extends Model {}

class Band extends Model {}

Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Band.init({
   name: DataTypes.STRING,
   genre: DataTypes.ENUM("Pop", "Rock", "Classic Rock", "Hip Hop", "R&B")
}, {
    sequelize,
    timestamps: false,
})

//create association
Musician.belongsTo(Band)
Band.hasMany(Musician)

module.exports = { Musician, Band }