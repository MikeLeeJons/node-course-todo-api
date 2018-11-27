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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bfd5e0286db11aa0a0254bd')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(res => {
  //   console.log(res);
  // })

  db.collection('Users').findOneAndUpdate({
    name: 'Mike'
  }, {
    $set: {
      name: 'Liza',
    },
    $inc: {
      age: -2
    }
  }, {
    returnOriginal: false
  }).then(res => {
    console.log(res);
  })

  //	client.close();
});