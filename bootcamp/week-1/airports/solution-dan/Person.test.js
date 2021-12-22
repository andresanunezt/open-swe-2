const Person = require('./Person')
const Bag = require('./Bag');

describe('Person Class', () => {

	const testPerson = new Person('RZ');
	const testBag = new Bag(22);


	test('has a name', () => {
		expect(testPerson.name).toBe('RZ');
	})

	test('has a bag', () => {
		testPerson.addBag(testBag);

		expect(testPerson.bags.length).toBe(1);
	})
})