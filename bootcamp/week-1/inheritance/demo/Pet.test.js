const {Pet, Dog, Bunny} = require('./Pet') //Destructuring when you require multiple objects

describe('Pet Class', () => {
	test('has a name', () => {
		const jeffsCat = new Pet('Pepper');

		console.log("*** PET PROTOTYPE ***", jeffsCat.__proto__)

		expect(jeffsCat.name).toBe('Pepper')
	})
})

describe('Dog Class', () => {
	const andresDog = new Dog('Lula');

	console.log("*** DOG PROTOTYPE ***", andresDog.__proto__)

	test('has a name', () => {
		expect(andresDog.name).toBe('Lula')
	})

	test('is a dog', () => {
		expect(andresDog.species).toBe('Dog')
	})
})

describe('Bunny Class', () => {
	test('is a pet', () => {
		const jinsBunny = new Bunny('Basil')
		// instanceof will verify what an object's Parent Class is
		expect(jinsBunny instanceof Pet).toBe(true);
	})
})