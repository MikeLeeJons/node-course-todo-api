//const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connect Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({
  //   text: 'Eat out'
  // }).then((res) => {
  //   console.log(res);
  // })

  // db.collection('Todos').deleteOne({
  //   text: 'Eat out'
  // }).then(res => {
  //   console.log(res);
  // })

  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((res) => {
  //   console.log(res);
  // })

  db.collection('Users').deleteMany({
    name: 'Mike'
  }).then(res => {
    console.log(res);
  })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5bfd499d3c7da5122fff190f')
  }).then(res => {
    console.log(res);
  })

  //	client.close();
});