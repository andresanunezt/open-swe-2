const Passenger = require('./Passenger')
const Person = require('./Person')

describe('Passenger Class', () => {
	const testPassenger = new Passenger('555','Chad')

	test('Passengers are People', () =>{
		expect(testPassenger instanceof Person).toBeTruthy
	})

	test('Passengers can call attendant', () => {
		console.log = jest.fn()

		testPassenger.callAttendant()

		expect(console.log).toHaveBeenCalledWith("Excuse me! Over here!")
	})

	test('Passengers can watch in-flight movie', () => {
		expect(testPassenger.watchEntertainment()).toBe('Oooh what a good movie!')
	})

	test('has a ticket', () => {
		expect(testPassenger.ticketNum).toBe('555')
	})
})