const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where UserName='"+user.username+"' and UserType='"+user.type+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from user where ID='"+id+ "'";
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
		var sql = "Insert into salary (ID,UserName,Salary,Date) VALUES('"+user.id+"','"+user.username+"','"+user.salary+"','"+user.date+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},
	delete: function(user, callback){
		var sql = "delete from user where ID = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});

	},
	search: (search, callback) => {
		var sql = "SELECT * FROM user WHERE ID = '"+search+"' OR Name = '"+search+"' OR UserName = '"+search+"' OR Email = '"+search+"' OR ContactNO = '"+search+"' OR NID = '"+search+"' OR Gender = '"+search+"' OR UserType = '"+search+"' OR Address = '"+search+"'";
		db.getResults(sql, (results) => {
			callback(results);
		});
	},
	msg: function(user, callback){
		var sql = "Insert into messages (Message,Frm,To) VALUES('"+user.msg+"','"+user.from+"','"+user.to+"','"+user.contactno+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}

	
}
