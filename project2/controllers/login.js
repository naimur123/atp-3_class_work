
const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	    = express.Router();	




router.get('/',(req,res)=>{
    res.render('adminlogin/adminlogin');
})
router.post('/',(req,res)=>{
    var user=
    {
        username: req.body.username,
        password: req.body.password,
        type: req.body.type

    };
    userModel.validate(user, function(status){

        if(status){
       
        res.cookie('username', req.body.username);
        res.redirect('/adminhome');
        }
        else{
                res.redirect('/adminlogin');
        }
    });
})
module.exports = router; 