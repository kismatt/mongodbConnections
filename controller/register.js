var express = require('express');
var app=express();
var router = express.Router();
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }))



router.get('/', function (req, res, next) {
    res.render('register.pug', {
        title: 'javascript',
        message: 'Please Register here',

    })

})
router.post('/', function (req, res, next) {
    console.log('hellow everyone from register body', req.body);
    res.json({
        message: 'Hi from post request',
        firstname: req.body.firstname,
        email: req.body.email,
        password:req.body.password
    })




})
router.put('/', function (req, res, next) {

})
router.delete('/', function (req, res, next) {

})

module.exports = router;