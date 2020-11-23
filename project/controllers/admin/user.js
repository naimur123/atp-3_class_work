const express 	= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	= express.Router();
const { check, validationResult } = require('express-validator');

router.get('*',  (req, res, next)=>{
	 if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	 }
}
);

router.get('/createmanager', (req, res)=>{
	res.render('admin/user/createmanager');
});
router.post('/createmanager',[
    check('email', 'Email length should be 10 to 30 characters') 
    .isEmail().isLength({ min: 10, max: 30 }), 
     check('name', 'Name length should be 10 to 20 characters').isAlpha() 
    .isLength({ min: 5, max: 20 }), 
    check('contactno', 'Mobile number should contains 11 digits') 
    .isLength({ min: 11, max: 15}),
     
   check('type', 'User Type Must be admin').equals("manager").isLength({ min: 5, max: 30 }),
   
   check('password', 'Password length should be 5 to 10 characters') 
    .isLength({ min: 5, max: 10 }) 
], (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isAlpha){
        res.json("Name Must Be string");
    }
    else{
    if (!errors.isEmpty()) { 
       
            res.json(errors) 
     } 
  
    // If no error occurs, then this 
    // block of code will run 
    else { 
      
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
            userModel.validate2(user,(type) => {
                if ( type == req.body.username ) {
                    res.send("User Name Already Taken")     
                }
                else {
                    console.log("Error");  
                    userModel.insert(user, function(status){
        
                        if(status){
                    
                            console.log("added");
                         
                           
                            res.redirect('/adminhome');
                          
                        }
                        else{
                              console.log("Error");  
                        }
                    });    
                }
            })
           
    } 
}
});
router.get('/editmanager/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('admin/user/edit',user);
});

router.post('/editmanager/:id', (req, res)=>{
    var user = {
        id: req.params.id,
        ename: req.body.ename,
        cname: req.body.cname,
        contactno: req.body.contactno,
        username: req.body.username,
        file:     req.files.file
	};
    userModel.update(user, function(status){

        if(status){
    
            console.log("Updated");
            res.redirect('/home/userlist');
          
        }
        else{
              console.log("Error");  
        }
});
})
router.get('/deletemanager/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('admin/user/deletemanager',user);
});

router.post('/deletemanager/:id', (req, res)=>{
    var inputValue = req.body.vote;
    if (inputValue == "Delete"){
    var user = {
        id: req.params.id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/adminhome/managerlist');
          
        }
        else{
              console.log("Error");  
        }
});}
else{
    res.redirect('/adminhome/managerlist');
}
})
router.get('/addadmin', (req, res)=>{
	res.render('admin/user/addadmin');
});
router.post('/addadmin', [ 
    
    check('email', 'Email length should be 10 to 30 characters') 
                    .isEmail().isLength({ min: 10, max: 30 }), 
    check('name', 'Name length should be 10 to 20 characters').isAlpha()
                    .isLength({ min: 5, max: 20 }), 
    check('contactno', 'Mobile number should contains 11 digits') 
                    .isLength({ min: 11, max: 15}),
                     
    check('type', 'User Type Must be admin').equals("admin").isLength({ min: 5, max: 30 }),
                   
    check('password', 'Password length should be 5 to 10 characters') 
                    .isLength({ min: 5, max: 10 }) 
], (req, res)=>{
    const errors = validationResult(req); 
    if(!errors.isAlpha){
        res.json("Name Must Be string");
    }
    else{
    if (!errors.isEmpty()) { 
       
            res.json(errors) 
     
       
    } 
  
    // If no error occurs, then this 
    // block of code will run 
    else { 
      
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
            userModel.validate2(user,(type) => {
                if ( type == req.body.username ) {
                    res.send("User Name Already Taken")     
                }
                else {
                    console.log("Error");  
                    userModel.insert(user, function(status){
        
                        if(status){
                    
                            console.log("added");
                         
                           
                            res.redirect('/adminhome');
                          
                        }
                        else{
                              console.log("Error");  
                        }
                    });    
                }
            })
           
    }
} 

 
});
router.get('/deleteuser/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('admin/user/deleteuser',user);
});

router.post('/deleteuser/:id', (req, res)=>{
    var inputValue = req.body.vote;
    if (inputValue == "Delete"){
    var user = {
        id: req.params.id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/adminhome/userlist');
          
        }
        else{
              console.log("Error");  
        }
});}
else{
    res.redirect('/adminhome/userlist');
}
})
router.get('/addsalary/:id', (req, res)=>{
  
    userModel.getById(req.params.id, (result) => {
        res.render('admin/user/addsalary', { user: result[0] });
    });
    
	
});

router.post('/addsalary/:id', (req, res)=>{
   
    var user = {
        id: req.params.id,
        username:req.body.username,
        salary:req.body.salary,
        date:req.body.date
    };
    userModel.salary(user, function(status){

        if(status){
    
            console.log("Updated");
            res.redirect('/adminhome/managerlist')
        }
        else{
              console.log("Error"); 
        }

});
})
router.get('/editprofile/:id', (req, res)=>{
   
    userModel.getById(req.params.id, (result) => {
        res.render('admin/user/editprofile', { user: result[0] });
    });
       
});

router.post('/editprofile/:id', (req, res)=>{
    var user = {
        id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        contactno: req.body.contactno,
        address: req.body.address,
        password: req.body.password

	};
    userModel.update(user, function(status){

        if(status){
    
            console.log("Updated");
            res.redirect('/adminhome/profile');
          
        }
        else{
              console.log("Error");  
        }
});
})

module.exports = router;