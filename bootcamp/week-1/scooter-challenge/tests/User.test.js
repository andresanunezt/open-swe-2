const User = require('../src/User')
const Scooter = require('../src/Scooter')

describe('User Object', () => {

	test('user has payment account', () => {
		const testUser = new User('Jeff', 100);
		expect(testUser.account).toEqual(100)

	})

	test('renting Scooter charges account', () => {
		const testUser = new User('Jeff', 100);
		testUser.rentScooter()
		expect(testUser.account).toEqual(80)
	})

	test('renting Scooter assigns Scooter to User', () => {
		const testUser = new User('Jeff', 100);
		const testScooter = new Scooter('Palo Alto', true);
		testUser.rentScooter(testScooter);
		expect(testUser.scooter).toStrictEqual(testScooter)
	})
})