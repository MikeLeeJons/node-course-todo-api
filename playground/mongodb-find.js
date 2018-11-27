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

	// db
	// 	.collection('Todos')
	// 	.find({
	// 		_id: new ObjectID('5bfd46b0a34e051092b2e998')
	// 	})
	// 	.toArray()
	// 	.then((result) => {
	// 		console.log('Todos');
	// 		console.log(result);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});

	// db
	// 	.collection('Todos')
	// 	.find({
	// 		completed: false
	// 	})
	// 	.count()
	// 	.then((count) => {
	// 		console.log(`Todos count: ${count}`);

	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});

	db
		.collection('Users')
		.find({
			name: 'Mike'
		})
		.toArray()
		.then((users) => {
			console.log('Users');
			console.log(users);
		})
		.catch((err) => {
			console.log(err);
		});

	//	client.close();
});