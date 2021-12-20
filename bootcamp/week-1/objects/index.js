let user = 'Shafee';
let anotherUser = 'Rene';

let favoriteColor = 'Green';
let anotherFavoriteColor = 'Blue';

// Array []

/*
  Data is in order,
  Arrays have a length
*/

let userArray = [user, anotherUser];

// console.log("# of Users: ", userArray.length)

// console.log("Order of Users: ", userArray[0], userArray[1])

// Objects {}

/*
  Data is unordered
  Objects have no length;

  Great at creating a fixed "Shape" for our data
*/

let shafee = {
  name : 'Shafee',
  favoriteColor : 'Green'
}

// Ways of instantiating (creating) an Objects

// 1. Object literal
/*
  Very common way to create Objects
*/
let banana = {
  color : 'yellow',
  eat : function() {
    return 'Yummy'
  }
}

// console.log("banana object: ", banana)
// console.log("eat method: ", banana.eat())

// 2. ES6 Class Syntax
/*
  'Syntatic Sugar'

  "Sweetens up" how we write objects, especially for Java Developers!
*/

class User {
  //constructor function for all properties
  constructor(name, favColor){
    this.name = name
    this.favoriteColor = favColor
  }
}

// Creates reusable template for objects
const rene = new User('Rene', 'Blue');
const constance = new User('Constance', 'Lavender')
const stan = new User('Stanley', 'Purple');
const jin = new User('Jin', 'blue');
const diana = new User ('Diana', 'Teal');
const andres = new User('Andres', 'Forest Green')
const jeff = new User('Jeff', 'Green')


console.log("rene user object: ", rene.name)
console.log("constance user object: ", constance['favoriteColor'])

jeff.favoriteColor = 'Fuschia';
jeff['name'] = 'Geoff';

console.log("Jeff now: ", jeff)

// console.log("Keys on a User", Object.keys(jeff))

let keys = Object.keys(jeff)
//Use Object.keys() to loop over the keys in an object
for(let i = 0; i < keys.length; i++){
  let key = keys[i];
  console.log(key, ' has value ', jeff[key])
}

// nested properties

let superUser = {
  name : 'Diana',
  favoriteFoods : ['mac', 'cheese', 'mac and cheese'],
  siblings : {
    brother : 'Alex',
    sister : 'Aida'
  }
}

console.log("Diana's brother? ", superUser['siblings'].brother)