const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const {Sauce} = require('./models/sauce');
const {db} = require('./db')

const port = 3000

const app = express();

// serve static assets from the public/ folder
app.use(express.static('public'));

const seedDb = async () => {
    
    await db.sync({ force: true });

    const sauces = [
        {name : 'Sriracha', image : '/img/Sriracha.gif'},
        {name : 'Franks', image: '/img/Franks.gif'},
        {name : 'Tobasco', image: '/img/Tobasco.gif'}
    ]

    const saucePromises = sauces.map(sauce => Sauce.create(sauce))
    await Promise.all(saucePromises)
    console.log("db populated!")
}

seedDb();


app.get('/sauces', async (req, res) => {
    const sauces = await Sauce.findAll()
    // res.json({ sauces })
    res.json({ sauces })
})

app.get('/sauces/:id', async (req, res) => {
    const sauce = await Sauce.findByPk(req.params.id)
    res.json({sauce})
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})