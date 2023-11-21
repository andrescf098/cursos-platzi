const Person = require('./05-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Andres', 83.5, 1.84);
  });
  test('Should be a person', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
  test('Should be a person', () => {
    person.weight = 58;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
});
