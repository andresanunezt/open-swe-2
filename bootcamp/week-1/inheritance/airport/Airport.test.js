const Airport = require('./Airport')
const Plane = require('./Plane')
const Bag = require('./Bag')
const Person = require('./Person')
const Passenger = require('./Passenger')

describe('Airport object', () => {
	const testAirport = new Airport("DFW")

	const testPlane = new Plane('912')

	const testPerson = new Passenger('Damon')

	const testBag = new Bag(55)

	
	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
	})

	test('airport has planes', () => {
		expect(Array.isArray(testAirport.planes)).toBe(true)
	})

	test('airport can add planes', () => {
		testAirport.addPlane(testPlane)
		expect(testAirport.planes.length).toBe(1)
	})

	test('airport can have planes with passengers with bags', () => {
		testPerson.addBag(testBag)
		testPlane.addPassenger(testPerson)
		testAirport.addPlane(testPlane)
		expect(testAirport.planes[0].passengers[0].bags[0].weight).toBe(55)
	})
})