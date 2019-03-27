// var express = require('express');
// var app = express();
// var router = express.Router();
// const MongoClient = require('mongodb').MongoClient;
// var dbUrl = 'mongodb://127.0.0.1:27017';
// var dbName = 'group11db';
// var colName = "mytable"

// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }))



// router.get('/', function (req, res, next) {
//     // res.render('register.pug', {
//     //     title: 'javascript',
//     //     message: 'Please Register here',

//     // })

// })
// router.post('/register', function (req, res, next) {
//     console.log('hellow everyone from register body', req.body);
//     res.render('register.pug', {
//         title: 'javascript',
//         message: 'Please Register here',

//     })

//     MongoClient.connect(dbUrl, function (err, client) {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             console.log('database connected successuflly');
//             var db = client.db(dbName);


//             var obj = {
//                 firstname: req.body.firstname,
//                  lastname:req.body.lastname,
//                  email:req.body.email,
//                  password:req.body.password
//             }
//             db.collection(colName).insert(obj,function(err,result){
//                 if(err){
//                     return console.log(err);
//                 }else{
//                     res.json(obj)
//                 }
//             });


//         }
//     })



// })
// router.put('/', function (req, res, next) {

// })
// router.delete('/', function (req, res, next) {

// })

// module.exports = router;