const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./../server/db/mongoose')
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// })

Todo.findByIdAndRemove('5c02d995a5b1b279b53dd3ce').then((todo) => {
  console.log(todo);
})