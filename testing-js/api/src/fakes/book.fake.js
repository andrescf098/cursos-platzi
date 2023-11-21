const faker = require('@faker-js/faker');

function generateOneBook() {
  return {
    _id: faker.string.uuid(),
    name: faker.name.productName(),
    price: faker.datatype.number(),
  };
}

const generateManyBooks = (quantity = 10) => {
  const fakeBooks = [];
  for (let i = 0; i < quantity; i += 1) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBooks };
