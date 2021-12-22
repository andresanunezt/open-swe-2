
// DRY

/*
	Dont Repeat Yourself
*/

class Pet{
	constructor(name, species){
		this.name = name
		this.species = species
	}


}

class Dog extends Pet {
	constructor(name){
		super(name) //Super() calls the parent class constructor()
		this.species = 'Dog'
	}

	givePaw(){
		return 'here is my paw...'
	}
}

class Bunny extends Pet {
	constructor(name){
		super(name)
		this.species = 'Bunny'
	}
}

// const jinsBunny = new Bunny('Basil' )
// const andresDog = new Dog('Lula')
// const dianasDog = new Pet('Hazel')
// const dansDog = new Pet('Wilbur')

module.exports = { Pet, Dog, Bunny } // put it in an object when module.exports multiple things