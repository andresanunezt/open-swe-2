class Plane {
	constructor(flightNumber){
		this.flightNumber = flightNumber
		this.passengers = []
		this.origin = '';
		this.destination = '';
	}

	addPassenger(person){
		this.passengers.push(person)
	}

	addOrigin(city){
		this.origin = city;
	}

	addDestination(city){
		this.destination = city
	}
}

module.exports = Plane