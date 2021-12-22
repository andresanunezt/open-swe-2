const Passenger = require('./Passenger')
const CrewMember = require('./Crew')

class Plane {

	constructor(flightNumber) {
		this.flightNumber = flightNumber
		this.origin = ''
		this.destination = ''
		this.passengers = []
		this.crew = []
	}

	setOrigin(airport) {
		this.origin = airport
	}

	setDestination(airport) {
		this.destination = airport
	}

	addPassenger(person){
		if(person instanceof Passenger){
			this.passengers.push(person)
		} else if(person instanceof CrewMember) {
			this.crew.push(person)
		} else {
			return 'Sorry no flight for you'
		}
		
	}
}

module.exports = Plane