const {
  ObjectID
} = require('mongodb');
const jwt = require('jsonwebtoken');

const {
  Todo
} = require('./../../models/todo');
const {
  User
} = require('./../../models/user');

const userOneId = new ObjectID()
const userTwoId = new ObjectID()

const users = [{
  _id: userOneId,
  email: 'mike@mike.mi',
  password: 'lizzie',
  tokens: [{
    access: 'auth',
    token: jwt.sign({
      access: 'auth',
      _id: userOneId
    }, 'mike').toString()
  }]
}, {
  _id: userTwoId,
  email: 'liza@mike.mi',
  password: 'mikeee'
}]

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}];

let populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
}

let populateUsers = (done) => {
  User.remove({}).then(() => {
    let userOne = new User(users[0]).save();
    let userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
}

module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
}

