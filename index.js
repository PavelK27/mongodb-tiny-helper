module.exports = function (url,dbname) {
    var mongodbHelper = {};
    var MongoClient = require('mongodb').MongoClient;
    var methods = ['find','findOne','updateMany','updateOne','insertMany','insertOne','deleteMany','deleteOne'];

    for(let i = 0; i<methods.length; i++) {
      mongodbHelper[methods[i]] = function(col,data,callback) {
        data = {
          query: data.sort | data.limit ? data.query : data,
          collection: col,
          method: methods[i]
        };

        mongodbHelper.query(data,callback);
      }
    }

    mongodbHelper.query = function(data, callback) {
      MongoClient.connect(url, function(err, client) {
        if (err) throw err;

        const db = client.db(dbname);
        const collection = db.collection(data.collection);

        let method = data.method ? data.method : 'findOne';
        let query = data.query;

        if (method !== 'find') {
            collection[method](query.filter && typeof query.filter !== 'function' ? query.filter : query, 
              query.update ? query.update : false, function(err,data){
              if (err) throw err;
              callback(data);
            });
          } else {
            collection[method](query.query).sort(query.sort).limit(query.limit ? query.limit : 0).toArray(function(err,data){
            if (err) throw err;
            callback(data);
          });
        }

        client.close();
      });
    }

    return mongodbHelper;
}