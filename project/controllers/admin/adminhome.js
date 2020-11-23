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
	s=req.cookies['username'];
	res.render('admin/adminhome/adminhome',{name: s});	
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
   var x=req.cookies['username']
   console.log(x)
   var y="manager";
	var user = {
		date: new Date(),
        sendfrom: req.cookies['username'],
		sendto: req.body.to,
		msg: req.body.msg,
		type: y
		
	};
	userModel.validate3(user,(type) => {
		if ( type == req.body.to) {
			userModel.msg(user, function(status){
				if(status){
					 console.log("Sent");
					 res.send('<h3>Sent Successfully</h3>');
				 }
				 else{
					   console.log("Error");  
				 }
		 });
		}
		else {
			
			  res.send("User Name doesn't in the list") 
		}
	})
   

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
router.get('/transaction', (req, res)=>{
	var user= req.cookies['username']
	console.log(user)
    userModel.transaction(user, (result) => {
		res.json(result)
	})


})
/*router.post('/transaction', (req, res)=>{
	var user= req.cookies['username']
	console.log(user)
    userModel.transaction(user, (result) => {
		res.send(result)
	
  });
})*/
router.get('/salarylist', (req, res)=>{
	
	var user= req.cookies['username']
	console.log(user)
    userModel.salarylist(user, (result) => {
		res.send(result)
	})
})


module.exports = router; 