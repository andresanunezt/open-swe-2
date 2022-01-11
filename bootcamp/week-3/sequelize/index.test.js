const { sequelize } = require("./db");

const { Musician, Band } = require("./index") 

describe('Musician Database', () => {

    beforeAll(async () => {
        await sequelize.sync({force: true})
    })

    test('can create a musician', async() => {
        const testMusician = await Musician.create({name: "Taylor Swift"})
        expect(testMusician.name).toBe("Taylor Swift")
    })

    test('musician can play an instrument', async() =>{
        const testMusician = await Musician.create({name: "John Mayer", instrument: "guitar"})
        expect(testMusician.instrument).toBe("guitar");
    })

    //new code
    test('can create a band', async() => {
        const testBand = await Band.create({name: "Coldplay"})
        expect(testBand.name).toBe("Coldplay")
    })

    test('band has a genre', async() => {
        const testBand = await Band.create({name: "Migos", genre: "Hip Hop"})
        expect(testBand.genre).toBe("Hip Hop")
    })

    test('Band can have many musicians', async() => {
        const testBand = await Band.create({name: "The Beatles", genre: "Rock"})
        const JL = await Musician.create({name: "John Lennon", instrument: "guitar"})
        const GH = await Musician.create({name: "George Harrison", instrument: "guitar"})
        const PM = await Musician.create({name: "Paul McCartney", instrument: "vocals"})
        const RS = await Musician.create({name: "Ringo Starr", instrument: "drums"})

        await testBand.addMusician(JL)
        await testBand.addMusician(GH)
        await testBand.addMusician(PM)
        await testBand.addMusician(RS)

        const musicians = await testBand.getMusicians()

        expect(musicians.length).toBe(4)
    })
})