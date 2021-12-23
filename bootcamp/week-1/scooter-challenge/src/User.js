class User {
	constructor(name, dollars){
		this.name = name
		this.account = dollars
		this.scooter = {}
	}

	rentScooter(scooter){
		this.account = this.account - 20;
		this.scooter = scooter
	}
}

module.exports = User