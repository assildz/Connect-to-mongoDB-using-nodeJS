let mongo = require('mongodb').MongoClient;

// localhost of database
let url = "mongodb://localhost:27017";


// mongo.connect(url, {useNewUrlParser: true}, (err, client) => {
// 	if(err) throw err;
// 	let db = client.db('assildz');
// 	let collection = db.collection('mimi');

// 	collection.find().toArray((err, items) => {
// 		console.log(items);

// 	});
// 	client.close()
// });

mongo.connect(url, {useNewUrlParser: true}, (err, client) => {
	if(err) throw err;

	// get the database then collection
	let mimiCollection = client.db('assildz').collection('mimi');

	// deal with the collection
	mimiCollection.find().toArray((err, data) => console.log(data));

	// cancel the mission
	client.close()
})

