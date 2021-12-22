const CrewMember = require('./Crew')
const Person = require('./Person')

describe('Crew Member', () => {

	const testCrew = new CrewMember("Antony")
	
	test('crew members are people too!', () => {
		expect(testCrew instanceof Person).toBeTruthy
	})
})