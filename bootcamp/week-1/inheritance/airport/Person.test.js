const Person = require('./Person')
const Bag = require('./Bag')

describe('Person', () => {
	const testPerson = new Person('Aden')
	const testGucciBag = new Bag(12)

	test('has a name', () => {
		expect(testPerson.name).toBe('Aden')
	})

	test('has a bag', () => {
		testPerson.addBag(testGucciBag)
		expect(testPerson.bags.length).toBe(1)
	})
})