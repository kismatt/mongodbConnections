var mongoose=require('mongoose');
var config=require('./index');
var dbUrl=config.dbUrl+'/'+  config.dbName;


mongoose.connect(dbUrl,function(err,done){
    if(err){
        console.log('this is our err',err);
    }
    else{
        console.log('db connection established');

    }
});

