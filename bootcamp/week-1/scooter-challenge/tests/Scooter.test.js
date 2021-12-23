const Scooter = require('../src/Scooter');

describe('Scooter Object Properties', () => {

	test('Scooter is an object, with a location', () => {
		const testScooter = new Scooter('Brooklyn');

		expect(typeof testScooter).toBe('object');
		expect(testScooter.station).toBe('Brooklyn');
	})	
})

describe('Scooter Object Methods', () => {

	test('charged scooter can be rented', () => {
		const testScooter = new Scooter('Chicago', true);
		expect(testScooter.rent()).toBe('Enjoy the ride!');
	})

	test('scooter with no charge cannot be rented', () => {
		const testScooter = new Scooter('Chicago', false);
		expect(testScooter.rent()).toBe('Scooter is not charged, please select another');
	})
})

