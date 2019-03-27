var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongodb=require('mongodb');
var userModel=require('./../model/user.model.js');
var MongoClient=mongodb.MongoClient;
var colName='mytable';
var dbUrl="mongodb://127.0.0.1:27017";
var dbName="group11db";
var jwt=require('jsonwebtoken');




router.get('/', function (req, res, next) {

        res.render('login.pug', {
        title: 'javascript',
        message: 'welcome to broadway',
        p: 'please login to our page'
    })

})

router.get('/register', function (req, res, next) {

        res.render('register.pug', {
        title: 'javascript',
        message: 'welcome to broadway',
        p: 'please register to our page'
    })

})
router.post('/register', function (req, res, next) {
    console.log('hellow everyone from register body', req.body);
    MongoClient.connect(dbUrl,function(err,client){
        if(err){
            return next(err);
        }
        else{
            console.log('database connection success');
            var db=client.db(dbName);


            var obj={
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                password:req.body.password,
                role:req.body.role

            }
            db.collection(colName).insert(obj,function(err,done){
                if(err){
                    next(err);
                }
                else{
                    res.json({
                        message:obj
                    })
                }
            });
            

        }
    })
    

})

router.get('/login', function (req, res, next) {

    res.render('login.pug', {
        title:"javascript",
        message:"welcome to broadway infosys nepal",
        p:'please login to our system'

    })

    })




router.post('/login', function(req,res,next){
   MongoClient.connect(dbUrl,function(err,client){
       if(err){
           return next(err);
       }
      

       else{
           var db=client.db(dbName);
           if(!req.body.email){
            next('username should required');
        }
           db.collection(colName).find({
               email:req.body.email,
           }).toArray(function(err,users){
               if(err){
                   return next(err);
               }
               if(users.length){
                   var token=jwt.sign(users[0],'dfdfdffdf',{
                       
                   });
                   res.json({
                       token:token,
                       user:users[0]
                   })
               }
               else{
                   next('no any users found');
               }
              
               
            //    else{
            //        res.status(200).json(done);
            //    }
           })
       }
   })
})







module.exports = router;


