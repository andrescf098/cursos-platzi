const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    database = client.db(DB_NAME);
  });
  afterAll(async () => {
    await server.close();
    await database.dropDataBase();
  });
  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books ', () => {
      const seedData = database.collection('books').insertMany([
        { name: 'Book 1', year: 2020, author: 'Author 1' },
        { name: 'Book 2', year: 2020, author: 'Author 2' },
      ]);
      return request(app)
        .get('/api/v1/books')
        .then(({ body }) => {
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
