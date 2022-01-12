const express = require('express');
const app = express();

const {Musician, Band} = require("./index");
const {sequelize} = require('./db');

const port = 8080;

app.get('/', async (req, res) => {
	res.send('<h1>Hello!</h1>')
})

app.get('/musicians', async (req, res) => {
    const musicians = await Musician.findAll();
    res.json({musicians});
})

app.get('/bands', async (req, res) => {
    const bands = await Band.findAll();
    res.json({bands});
})

app.get('/musicians/:id', async (req, res) => {
    const musician = await Musician.findByPk(req.params.id)
    res.json({musician})
})

app.get('/bands/:id', async (req, res) => {
    const band = await Band.findByPk(req.params.id, {include: Musician})
    res.json({band})
})

app.listen(port, async() => {
    await seed()
    console.log(`Server is listening on http://localhost:${port}`)
})

//Adds Musicians and Band to database
async function seed(){
	await sequelize.sync({ force: true });

	let eagles = await Band.create({name : 'Eagles', genre : 'Classic Rock'})
	let DH = await Musician.create({name : 'Don Henley'})
	let GF = await Musician.create({name : 'Glenn Frey'})

	let destiny = await Band.create({ name : "Destiny's Child", genre : 'Pop'})
	let bey = await Musician.create({ name : 'Beyoncé', instrument : 'Voice'})
	let KR = await Musician.create({ name : 'Kelly Rowland', instrument : 'Voice'})

	await eagles.addMusician(DH);
	await eagles.addMusician(GF);

	await destiny.addMusician(bey);
	await destiny.addMusician(KR);

    console.log("db seeded!")

}