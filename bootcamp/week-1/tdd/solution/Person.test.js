const Person = require('./Person');

let testPerson = new Person("Linda", ['Tom', 'Mary'])

test('has a name', () => {
  expect(testPerson.name).toBe('Linda');
})

test('has parents', () => {
  expect(testPerson.parents).toStrictEqual(['Tom', 'Mary']);
  expect(testPerson.parents.length).toBe(2);
})

test('childOf function', () => {
  expect(testPerson.childOf()).toBe('Tom & Mary')
})