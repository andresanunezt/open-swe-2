const Person = require('./Person')

class Passenger extends Person {
	constructor(ticketNum, name) {
		super(name)
		this.ticketNum = ticketNum
	}

	callAttendant() {
		console.log("Excuse me! Over here!")
	}

	watchEntertainment() {
		return 'Oooh what a good movie!'
	}
}

module.exports = Passenger