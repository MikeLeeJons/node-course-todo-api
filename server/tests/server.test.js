const expect = require('expect');
const request = require('supertest');
const {
  ObjectID
} = require('mongodb');

const {
  app
} = require('./../server');
const {
  Todo
} = require('./../models/todo');

const Todos = {
  _id: new ObjectID()
}

beforeEach((done) => {
  Todo.remove({}).then(() => done())
})

describe('POST /todos', () => {
  // it('should create a new todo', (done) => {
  //   let text = 'Test todo text'

  //   request(app)
  //     .post('/todos')
  //     .send({
  //       text
  //     }).expect(200)
  //     .expect((res) => {
  //       expect(res.body.text).toBe(text)
  //     })
  //     .end((err, res) => {
  //       if (err) {
  //         return done(err)
  //       }

  //       Todo.find().then((todos) => {
  //         expect(todos.length).toBe(1)
  //         expect(todos[0].text).toBe(text)
  //         done();
  //       }).catch((err) => {
  //         done(err)
  //       });
  //     })
  // })
  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
})

//TEST are not ready yet
// describe('GET /todos/:id', () => {
//   it('should return todo doc', (done) => {
//     request()
//       .get(`todos/${Todos._id.toHexString()}`)
//       .expect(200)
//       .
//   });
// });