var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
 
app.use(bodyParser.json())




var authroute=require('./controller/auth');

var userRoute=require('./controller/user');

var registerRoute=require('./controller/register');
// console.log('data',registerRoute)


// var file=require('./file.js');
// console.log('this is our file:',file);




app.use('/auth',authroute);
app.use('/user',userRoute);
app.use('/register',registerRoute);






//error handling middleware
app.use('/',authroute,function(err,req,res,next){
   if(err){
       res.json({
           message:err,
           status:400,
           data:'bad request'
       })
   }
})



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
app.listen(4000,'localhost',function(err,done){
    if(err){
        console.log('server listening failer');
    }
    else{
        console.log('server is listening at port 4000');

    }
});
