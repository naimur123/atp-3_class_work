const express = require('express');
const um = require.main.require('./models/userModel');

const router = express.Router();

router.get('/',(req,res)=>
{
    res.render('./customer/userhome');
})

router.get('/update',(req,res)=>
{
    res.render('./customer/userupdate');
})



module.exports = router;