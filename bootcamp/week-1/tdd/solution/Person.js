class Person {

  constructor(name, parents){
    this.name = name
    this.parents = parents
  }

  childOf(){
  	return this.parents.join(' & ')
  }

}
module.exports = Person;