  
const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where UserName='"+user.username+"' and Password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0].UserType);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){

		var sql = "select * from user where Id='"+id+ "'";
		db.getResults(sql, function(result){
			callback(result);
		});
	},
	getAll: function(user,callback){
		var sql = "select * from user where UserType='"+user+"' ";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		
		console.log(user.type);
		var sql = "Insert into user (Name,UserName,Email,ContactNo,NID,Gender,Address,UserType,Password) VALUES('"+user.name+"','"+user.username+"','"+user.email+"','"+user.contactno+"','"+user.nid+"','"+user.gender+"','"+user.address+"','"+user.type+"', '"+user.password+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update:function(user, callback){
		var sql = "Update user set Name = '"+user.name+"',UserName = '"+user.username+"',Email = '"+user.email+"',Address = '"+user.address+"', where Id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},
	delete: function(user, callback){
		var sql = "delete from user where Id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});

	},
	salary:function(user, callback){
		var sql = "Insert into salary (Id,UserName,Salary,Date) VALUES('"+user.id+"','"+user.username+"','"+user.salary+"','"+user.date+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},
	msg: function(user, callback){
        var sql = "Insert into messages (Message,SendFrom,SendTo,Date) VALUES('"+user.msg+"','"+user.sendfrom+"','"+user.sendto+"','"+user.date+"')";
        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    },
	getByMsg: function(callback){
		var sql = "select Message,SendTo,Date, from Messages";
		db.getResults(sql, function(result){
			callback(result);
		});
	},
	getAll2: function(user,callback){
		var sql = "select * from user where UserName='"+user+"' ";
		db.getResults(sql, function(results){
			callback(results);
		});
	}
	
}