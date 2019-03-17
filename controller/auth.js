var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
    
    // next('this is our error');
// //  res.json({
//      message:'this is error',
//      status:400

//  })
//     res.end('hi from authentication');
    
    res.render('login.pug',{
        title:'javascript',
        message:'welcome to broadway',
        p:'please login to our page'
    })
    
})
router.post('/', function (req, res, next) {

   

    
})
router.put('/', function (req, res, next) {

})
router.delete('/', function (req, res, next) {

})



router.get('/login/user', function (req, res, next) {
    res.end('welcome to your login page user');

})

router.get('/login/admin', function (req, res, next) {
    res.end('welcome to your login page admin');

})
router.post('/', function (req, res, next) {

})
router.put('/', function (req, res, next) {

})
router.delete('/', function (req, res, next) {

})



router.get('/register', function (req, res, next) {
    res.end('welcome to your register page');

})
router.post('/', function (req, res, next) {

})
router.put('/', function (req, res, next) {

})
router.delete('/', function (req, res, next) {

})

module.exports = router;


