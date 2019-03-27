var express = require('express');
var pug = require('pug');
var app = express();
var bodyParser = require('body-parser');
require('./config/mongoose.config.js');








// var dbUrl = 'mongodb://127.0.0.1:27017';
// var dbName = 'group11db';
// var colName = "mytable"
var authroute = require('./controller/auth');
var userRoute = require('./controller/user');
var authenticate =require('./middlewares/authenticate');
var authorize=require('./middlewares/authorize');
// var registerRoute = require('./controller/register');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// console.log('data', registerRoute)

// var file=require('./file.js');
// console.log('this is our file:',file);

app.use('/auth', authroute);

//This is our user to validate token
// app.use(function(req,res,next){
//     if(req.headers.token==="abcd"){
//         next();
//     }
//     else{
//          next('token not valid')
//     }
    
// })



app.use('/user',authenticate,authorize,userRoute);
app.use(function(err,req,res,next){
    if(err){
        console.log('this is our err',err);
        res.json({
            message:err
        })

    }
    
})







// app.use('/register', registerRoute);

//error handling middleware




// app.get('/write','help.txt','hellow how are you',function(err,done){
//     if(err){
//         console.log('file writing error');
//     }
//     else{
//         console.log('file writing success');
//     }

// })

// app.get('/read',function(req,res){
//     // console.log('at get request',req); 
//     // res.end('hi from express server');
//     file.read(function(err,done){
//         if(err){
//             res.end('error in reading file'+err);
//         }
//         else{
//             res.end('success in reading file'+done);
//         }
//     });

// })
app.listen(4000, 'localhost', function (err, done) {
    if (err) {
        console.log('server listening failer');
    }
    else {
        console.log('server is listening at port 4000');

    }
})
