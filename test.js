const mnh = require('./index.js')(
	'mongodb+srv://user:pass@my-db-wiu6v.mongodb.net/test?retryWrites=true&w=majority',
	'main'
);
mnh.find('col-name', data, function(val) {
	console.log(val);
});