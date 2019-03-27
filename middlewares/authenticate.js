var jwt=require('jsonwebtoken');
var config=require('./../config/index');
module.exports=function(req,res,next){
    var token;
    if(req.headers.token){
        token=req.headers.token;
    }
    if(token){
        jwt.verify(token,'dfdfdffdf',function(err,decoded){
            if(err){
                return next(err);
            }
            console.log('this is our decoded message',decoded);
            req.loggedInUser=decoded;
            next();
            // res.json({
            //     message:decoded
            // })
        });
        

    }
    else{
        next('token not provided');
    }
}

