var checkToken=function(req,res,next){
    res.json({
        message:'1 token for first user'
    })
    return next('i am error from ticket');
}

module.exports=checkToken;
 