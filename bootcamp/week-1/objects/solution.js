class Person {
	constructor(name, parents) {
		this.name = name
		this.parents = parents
	}

	childOf() {
		if(this.parents.length > 0) {
			return "My parents are " + this.parents.map(parent => parent.name).join(' & ')
		} else {
			return 'Nobody found... :('
		}
	}
}

let Marge = new Person('Marge Simpson', [])

let Homer = new Person('Homer J Simpson', [])

let Bart = new Person('Bart Simpson', [Homer, Marge])

let Lisa = new Person('Lisa Simpson', [Homer, Marge])

console.log(Bart.childOf())

console.log(Homer.childOf())