const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();


router.get('*',  (req, res, next)=>{
	if(req.cookies['username'] == null)
	{		
	res.redirect('/login');			
	}
	else{		
		next();			
	}		
});
router.get('/', (req, res)=>{
	res.render('admin/adminhome/adminhome');	
})
router.get('/managerlist', (req, res)=>{
	var user="manager";
	userModel.getAll(user,function(results)
	{
	   res.render('admin/adminhome/managerlist', {users: results});
	});
})
router.get('/userlist', (req, res)=>{
	var user="user";
	userModel.getAll(user,function(results)
	{
	   res.render('admin/adminhome/userlist', {users: results});
	});
})
router.get('/adminlist', (req, res)=>{
	var user="admin";
	userModel.getAll(user,function(results)
	{
	   res.render('admin/adminhome/adminlist', {users: results});
	});
})
router.get('/searchuser', (req, res) => {
    res.render('admin/adminhome/searchuser');
});

router.post('/searchuser', (req, res) => {
    userModel.search(req.body.search, (result) => {
        res.json({
            results: result
        });
    });
});
router.get('/sendmsg', (req, res)=>{
  res.render('admin/adminhome/sendmsg');
});

router.post('/sendmsg', (req, res)=>{

	var user = {
		date: new Date(),
        sendfrom: req.cookies['username'],
		sendto: req.body.to,
		msg: req.body.msg,
		
    };
    userModel.msg(user, function(status){
       if(status){
            console.log("Sent");
			res.send('<h3>Sent Successfully</h3>');
        }
        else{
              console.log("Error");  
        }
});

})
router.get('/receivedmsg', (req, res)=>{
  
	userModel.getByMsg(function(results)
	{
		res.render('admin/adminhome/receivedmsg', {users: results});
		
	});
    
	
});
router.get('/profile', (req, res)=>{

	var user= req.cookies['username'];
	console.log(user);
	userModel.getAll2(user,function(results)
	{
	   res.render('admin/adminhome/profile', {users: results});
	});
})
module.exports = router; 