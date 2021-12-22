const Bag = require('./Bag');

describe('Bag Class', () => {

	const testBag = new Bag(10);

	test('has a weight', () => {
		expect(testBag.weight).toBe(10);
	})

	test('throws and error, if bag does not have weight',() => {
		expect(() => new Bag()).toThrowError('bag must have a weight!')
	})
})