const Airport = require('./Airport');
const Plane = require('./Plane');
const Person = require('./Person');
const Bag = require('./Bag');


describe("Airport object", () => {

	test('has a name', () => {
		const testAirport = new Airport('JFK');
		expect(testAirport.name).toBe('JFK')
	})

	test('has array of planes', () => {
		const testPlane = new Plane('B60');
		const testPlane2 = new Plane('F20');
		testAirport.addPlane(testPlane);
		testAirport.addPlane(testPlane2);

		expect(Array.isArray(testAirport.planes)).toBeTruthy();
		expect(testAirport.planes.length).toBe(2)
	})

	test('airports can have planes that have passengers who have bags', () => {
		const testBag = new Bag(55);
		const testPassenger = new Person('Andres');
		const testPlane = new Plane('B52');
		const testAirport = new Airport('LGA');

		testPassenger.addBag(testBag);
		testPlane.addPassenger(testPassenger);
		testAirport.addPlane(testPlane);

		expect(testAirport.planes[0].passengers[0].bags[0].weight).toBe(55)
	})


})