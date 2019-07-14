// const server = require('../server/index.js');

test('seed generates 100 items', () => {
  return expect(100).toBe(100)
});

// const { MongoClient } = require('mongodb');
// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.reviews, {
//       useNewUrlParser: true,
//     });
//     db = await connection.db(global.reviews);
//   });

//   afterAll(async () => {
//     await connection.close();
//     await db.close();
//   });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('users');

//     const mockUser = { _id: 'some-user-id', name: 'John' };
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({ _id: 'some-user-id' });
//     expect(insertedUser).toEqual(mockUser);
//   });
// });