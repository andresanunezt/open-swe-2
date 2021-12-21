class Plane {
	constructor(flightNumber){
		this.flightNumber = flightNumber
		this.passengers = []
	}

	addPassenger(person){
		this.passengers.push(person)
	}
}

module.exports = Plane