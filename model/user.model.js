var mongoose=require('mongoose');

var Schema = mongoose.Schema;

var UserSchema= new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true,

    },
    username: {
        type:String,
        required:true,
        unique:true,



    },
    password:{
        type:String,
        required:true,
        

    },
    address:{
        type:String,
        required:true,
        
    },
    phoneNumber:{
        type:'Number',


    },
    image:String,

    dob:{
        type:Date

    },
    activeStatus:{
        type:Boolean,
        default:true
    },
    role:{
        type:'number',
        enum:[1,2,3],//1 for admin 2 for normal user//3 visitors
        default:3

    }



})//Thsiis is schema definition for user


//mongoose model
var UserModel= mongoose.model('user',UserSchema);
module.exports=UserModel;



