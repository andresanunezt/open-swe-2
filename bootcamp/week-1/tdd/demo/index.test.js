/*
GETTING STARTED
npm init
npm install jest
find your bliss ;) 

(You can do all this in replit too)
*/


const Book = require('./index') //require whatever we are exporting form index.js

describe('Book class', () => { //Describe: what are we testing?

	const testBook = new Book('Captain Underpants', 'Comedy');	

	test('has as a title', () => { // specific test
		expect(testBook.title).toBe('Captain Underpants'); //what do we expect this to look like?
	})

	//how can we test if this book has a genre of 'Comedy'?
	test('has a genre', () => {
	  expect(testBook.genre).toBe('Comedy')
	})
})