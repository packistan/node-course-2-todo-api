// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');
  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID("5b1169b200af09226524f883")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal : false
  //   }).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users').findOneAndUpdate({
     name: 'Cristina'
    }, {
      $inc: {
        age: 1
      }
    }, {
      returnOriginal : false
    }).then( (results) => {
    console.log(results)
  })

  // client.close();
});
