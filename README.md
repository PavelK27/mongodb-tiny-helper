# mongodb-tiny-helper
Simple set of CRUD operations for MongoDB driver in node.js

#Usage

```
const mh = require('mongodb-tiny-helper')(
	'mongodb-url-with-username-and-password',
	'database-name'
	);

	// Find many
	mn.find('collection-name', {}, function(val) {
		console.log(val);
	});

	```

#Supported commands
⋅⋅*find
⋅⋅*findOne
⋅⋅*updateMany
⋅⋅*updateOne
⋅⋅*insertMany
⋅⋅*insertOne
⋅⋅*deleteMany
⋅⋅*deleteOne