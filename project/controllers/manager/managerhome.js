const express 	= require('express');
const userModel1 = require.main.require('./models/userModel1');
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
		
	res.render('manager/managerhome/managerhome');	
})
router.get('/agentlist', (req, res)=>{
	var user="agent";
	userModel1.getAll(user,function(results)
	{
	   res.render('manager/managerhome/agentlist', {users: results});
	});
})
router.get('/agentlist', (req, res)=>{
	var user="user";
	userModel1.getAll(user,function(results)
	{
	   res.render('manager/managerhome/agentlist', {users: results});
	});
});

router.get('/editagent', (req, res)=>{

	var user= req.cookies['username'];
	console.log(user);
	userModel1.getAll2(user,function(results)
	{
	   res.render('manager/managerhome/editagent', {users: results});
	});
});


router.get('/sendmsg', (req, res)=>{
  res.render('manager/managerhome/sendmsg');
});

router.post('/sendmsg', (req, res)=>{

    var user = {
        date: new Date(),
        sendfrom: req.cookies['username'],
        sendto: req.body.to,
        msg: req.body.msg,
        
    };
    userModel1.msg(user, function(status){
       if(status){
            console.log("Sent");
            res.send('<h3>Sent Successfully</h3>');
        }
        else{
              console.log("Error");  
        }
});


});
router.get('/receivemsg', (req, res)=>{
  
	userModel1.getByMsg(function(results)
	{
		res.render('manager/managerhome/receivemsg', {users: results});
		
	});
    
	
});




module.exports = router;