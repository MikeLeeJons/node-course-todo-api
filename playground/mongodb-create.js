//const MongoClient = require('mongodb').MongoClient;
const {
	MongoClient,
	ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect Mongodb server');
	}
	console.log('Connected to Mongodb server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Meet with Liza',
	// 	completed: false
	// }, (err, res) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(res.ops);

	// 	console.log(res.ops[0]._id.getTimestamp());
	// });

	db.collection('Users').insertOne({
		name: 'Mike',
		age: 21,
		location: 'Tokio'
	}, (err, res) => {
		if (err) {
			return console.log('Unable to insert todo', err);
		}
		console.log(JSON.stringify(res.ops, undefined, 2));

	})

	client.close();
});