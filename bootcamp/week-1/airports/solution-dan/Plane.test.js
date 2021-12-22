const Plane = require('./Plane');
const Person = require('./Person');

describe('Plane Class', () => {

	const testPlane = new Plane('B500');

	const passenger1 = new Person('Constance');
	const passenger2 = new Person('Diana');


	test('has a flight #', () => {
		expect(testPlane.flightNumber).toBe('B500');
	})

	test('can have Passengers', () => {
		testPlane.addPassenger(passenger1);
		testPlane.addPassenger(passenger2);

		expect(Array.isArray(testPlane.passengers)).toBeTruthy();
		expect(testPlane.passengers.length).toBe(2)
		expect(testPlane.passengers[0].name).toBe('Constance')
	})

	test('has origin', () => {
		testPlane.addOrigin('DFW');
		expect(testPlane.origin).toBe('DFW');
	})

	test('has destination', () => {
		testPlane.addDestination('JFK');
		expect(testPlane.destination).toBe('JFK');
	})
})