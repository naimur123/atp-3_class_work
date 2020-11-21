const express = require('express');
const um = require.main.require('./models/userModel');

const router = express.Router();

router.get('/',(req,res)=>
{
    res.render('./customer/registration');
})
router.post('/',(req,res)=>
{
    var user = {
        name:req.body.name,
        username:req.body.username,
        password:req.body.password,
        nid:req.body.nid,
        email:req.body.email,
        gender:req.body.gender,
        address:req.body.address,
        contactno:req.body.phone,
        type:'user'
    };
    um.insert(user,(status)=>{
        if(status)
        {
            res.redirect('/login');
        }
        else
        {
            res.redirect('/registration');
        }
    });
})

module.exports = router;