
class Scooter {
	constructor(station, charged){
		this.station = station
		this.charged = charged
	}

	rent() {
		if(this.charged){ //Equivalent to: if(this.charged == true)
			return 'Enjoy the ride!'
		} else {
			return 'Scooter is not charged, please select another'
		}
	}
}

module.exports = Scooter