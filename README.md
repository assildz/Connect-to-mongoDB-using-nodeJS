# CONNECT TO MangoDB

#### 1. Get MangoDB Dependincy:  

```js
let mongo = require('mongodb').MongoClient;
```


#### 2. ADD Localhost of Database:  

```js
let url = "mongodb://localhost:27017";
```

#### 3. Connecting Then Query: 

```js
mongo.connect(url, {useNewUrlParser: true}, (err, client) => {
	if(err) throw err;

	// get the database then collection
	let mimiCollection = client.db('assildz').collection('mimi');

	// deal with the collection
	mimiCollection.find().toArray((err, data) => console.log(data));

	// cancel the mission
	client.close()
})
```


