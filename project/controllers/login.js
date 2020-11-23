const express = require('express');
const um = require.main.require('./models/userModel');

const router = express.Router();

router.get('/',(req,res)=>
{
    res.render('./login/login');
})


router.post('/',(req,res)=>
{
   var user = {
    username: req.body.username,
    password : req.body.password
   };
   um.validate(user,(type) => {
           if ( type== 'admin' ) {
               res.cookie('username', req.body.username);
               res.redirect('/adminhome');           
           }
           else if(type== 'manager'){
            res.cookie('username', req.body.username);
            res.redirect('/managerhome');             
        }
        else if(type== 'user'){
            res.cookie('username', req.body.username);
            res.redirect('/userhome');             
        }
        else if(type== 'agent'){
            res.cookie('username', req.body.username);
            res.redirect('/agent');             
        }
           else {
                res.redirect('/login');           
           }
       })

})

module.exports = router;