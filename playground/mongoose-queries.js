const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./../server/db/mongoose')
// const {
//   Todo
// } = require('./../server/models/todo');

const {
  User
} = require('./../server/models/user');

let id = '5bfd8925b78eaa458914e515'

User.findById({
  _id: id
}).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User', user);
}).catch((e) => console.log(e))

// let id = '5bfea6b29d08c21b7fd6807fe'

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('TodoById', todo);
// }).catch((e) => console.log(e))