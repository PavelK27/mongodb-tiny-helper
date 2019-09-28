# mongodb-tiny-helper
Simple set of CRUD operations for MongoDB driver in node.js

# Usage

```
const mh = require('mongodb-tiny-helper')(
	'mongodb-url-with-username-and-password',
	'database-name'
);

// Find many
let data = {
	query: {},
	sort: { user_id: -1 } // if needed
};
mh.find('collection-name', data, function(val) {
	console.log(val);
});

// Find one
mh.findOne('collection-name', {"user": "test"}, function(val) {
	console.log(val);
});

// updateMany() and update()
let data = { filter: { "qty": { $gt: 2 } }, update: { $set: {sku: "test2" }} };
mh.updateMany('collection-name', data, function(val) {
	console.log(val);
});
```

# Supported commands
* find
* findOne
* updateMany
* updateOne
* insertMany
* insertOne
* deleteMany
* deleteOne
