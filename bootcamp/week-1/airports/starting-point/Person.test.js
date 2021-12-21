const Person = require('./Person')

describe('Person Class', () => {

	const testPerson = new Person('RZ');

	test('has a name', () => {
		expect(testPerson.name).toBe('RZ');
	})
})