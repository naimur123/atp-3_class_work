const express = require('express');
const um = require.main.require('./models/userModel');

const router = express.Router();

router.get('/',(req,res)=>
{
    if(req.cookies['username'] == null)
    {
        res.redirect('/login');   
    }
    else
    {
       
        res.render('./customer/userhome');
        
       
    }
})

router.get('/update',(req,res)=>
{
    if(req.cookies['username'] == null)
    {
        res.redirect('/login');   
    }
    else
    {
        var user ={
            username:req.cookies['username']
        }
        um.getByUserName(user,(results)=>{
            results = {
                name:results.Name,
                email:results.Email,
                contactno:results.ContactNO,
                address:results.Address    
            }

            res.render('./customer/userupdate',results);
        })
    }
})
router.post('/update',(req,res)=>
{
    if(req.cookies['username'] == null)
    {
        res.redirect('/login');   
    }
    else
    {
        var user = {
            name:req.body.name,
            email:req.body.email,
            username:req.cookies['username'],
            address:req.body.address,
            contactno:req.body.phone,
        };
        um.updateCustomer(user,(status)=>{
            if(status)
            {
                res.redirect('/userhome');
            }
            else
            {
                res.redirect('/userhome/update');
            }
        });
    }
})



module.exports = router;