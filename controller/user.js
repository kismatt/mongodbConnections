var express = require('express');
var app = express();
var router = express.Router();
var morgan = require('morgan');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var colName = 'mytable';
var dbUrl = "mongodb://127.0.0.1:27017";
var dbName = "group11db";
var pug = require('pug');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
var Oid = mongodb.ObjectID;

// // app.use(bodyParser.json())




router.get('/', function (req, res, next) {
    //   res.json(req.query);
    console.log('this is our logged in user',req.loggedInUser);

    //This below monogquery gives all user data to user
    MongoClient.connect(dbUrl, function (err, client) {
        if (err) {
            return next(err);
        }
        else {
            var db = client.db(dbName);
            db.collection(colName).find().toArray(function (err, done) {
                if (err) {
                    next(err)

                }
                else {
                    res.json(done);
                }
            })
        }
    })

})




router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    MongoClient.connect(dbUrl, function (err, client) {
        if (err) {
            return next(err);
        }
        var db = client.db(dbName);
        db.collection(colName).find({ _id: new Oid(id) }).toArray(function (err, done) {
            if (err) {
                return next(err);
            }
            res.json(done);
        })


    })


})



router.put('/:id',function (req, res, next) {
    
     var id=req.params.id
    MongoClient.connect(dbUrl, function (err, client) {
        if (err) {
            return next(err);
        }
        var db = client.db(dbName);
        var obj={};
        
        if(req.body.username){
            obj.username=req.body.username;
            
        }
        if(req.body.email){
            obj.email=req.body.email;
            
        }
        if(req.body.password){
            obj.password=req.body.password;
            
        }

        db.collection(colName).update({ _id: new Oid(id) }, {
            $set: obj
        }, function (err, done) {
            if (err) {
                return next(err);
            }
            res.json(done);
        
        })

    })


})

router.delete('/:id',function(req,res,next){
    var id=req.params.id;
    MongoClient.connect(dbUrl,function(err,done){
        if(err){
            return next(err);
        }
        else{
            var db=done.db(dbName);
            db.collection(colName).remove({_id:new Oid(id)},function(err,done){
                if(err){
                    return next('user got removed');
                }
                res.json(done);
            })
        }
    })
})

// router.post('/', function (req, res, next) {
// // console.log('reachieddddd')


// })



module.exports = router;

