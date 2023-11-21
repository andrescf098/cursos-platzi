const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const MockSpyGetAll = jest.fn();
const MongoLibStub = {
  getAll: MockSpyGetAll,
  create: () => {},
};

jest.mock('..//lib/mongo.lib', () => jest.fn().mockImplementation(() => ({ getAll: MockSpyGetAll, create: () => {} })));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe('Test for getBooks method', () => {
    const fakeBooks = generateManyBooks(10);
    MockSpyGetAll.mockResolvedValue(fakeBooks);
    test('should return an array of books', async () => {
      const books = await service.getBooks();
      expect(books.length).toEqual(1);
      expect(MockSpyGetAll).toHaveBeenCalled();
      expect(MockSpyGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
