const {db} = require('../db');
const { DataTypes, Model } = require('sequelize');
class Sauce extends Model {}

Sauce.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize: db,
    timestamps: false,
});

module.exports = {Sauce};