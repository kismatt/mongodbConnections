var express = require('express');
var app = express();
var router = express.Router();
var morgan = require('morgan');
var pug = require('pug');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
 
// app.use(bodyParser.json())




router.get('/', function (req, res, next) {
    res.render('login.pug',{
        title:'javascript',
        message:'welcome to broadway',
        p:'please login to our page'
    })
})

router.post('/', function (req, res, next) {
// console.log('reachieddddd')
    console.log('hellow everyone from post request', req.body);
    res.json({message: 'Hi from post request',
                data:req.body.email})

})



module.exports = router;

