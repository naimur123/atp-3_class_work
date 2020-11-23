const express 	= require('express');
const userModel1	= require.main.require('./models/userModel1');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
    if(req.cookies['username'] == null){
       res.redirect('/login');
   }else{
       next();
    }
}
);

router.get('/createagent', (req, res)=>{
	res.render('manager/user1/createagent');
});
router.post('/createagent', (req, res)=>{

    var user=
    {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        contactno: req.body.contactno,
        nid: req.body.nid,
        gender: req.body.gender,
        address: req.body.address,
        type: req.body.type,
        password: req.body.password
      

    };
    userModel1.insert(user, function(status){

        if(status){
    
            console.log("Created");
            res.redirect('/managerhome/agentlist');
          
        }
        else{
              console.log("Error");  
        }
    });
});





router.get('/addsalary/:id', (req, res)=>{
  
    userModel1.getById(req.params.id, (result) => {
        res.render('manager/user1/addsalary', { user: result[0] });
    });
    
	
});

router.post('/addsalary/:id', (req, res)=>{
   
    var user = {
        id: req.params.id,
        username:req.body.username,
        salary:req.body.salary,
        date:req.body.date
    };
    userModel1.salary(user, function(status){

        if(status){
    
            console.log("Updated"); 
            res.redirect('/managerhome/agentlist');

        }
        else{
              console.log("Error"); 
        }

});
})
router.get('/updateagent/:id', (req, res)=>{
   
    userModel1.getById(req.params.id, (result) => {
        res.render('manager/user1/updateagent', { user: result[0] });
    });
       
});

router.post('/updateagent/:id', (req, res)=>{
    var user = {
        id: req.params.id,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        

	};
    userModel1.update(user, function(status){

        if(status){
    
            console.log("Updated");
            res.redirect('/managerhome/editagent');
          
        }
        else{
              console.log("Error");  
        }
});
})








router.get('/deleteagent/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('manager/user1/deleteagent',user);
});

router.post('/deleteagent/:id', (req, res)=>{
    var inputValue = req.body.vote;
    if (inputValue == "Delete"){
    var user = {
        id: req.params.id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/managerhome/agentlist');
          
        }
        else{
              console.log("Error");  
        }
});}
else{
    res.redirect('/managerhome/agentlist');
}
})


module.exports = router;