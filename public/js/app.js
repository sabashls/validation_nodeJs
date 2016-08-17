var app = angular.module('mylog', []);
app.controller('logctrl',function($scope,$http){

$scope.register = function(){
var reg ={
	name:$scope.username,
	email:$scope.email,
	url:$scope.url,
	staffno:$scope.staffno,
	password:$scope.password,
	password_confirm:$scope.password_confirm,
	comments:$scope.comment	
}
console.log(reg)
$http.post("/",reg).success(function(data,status)
{
        console.log(data.error);
        if(data.error){
			for(var i=0;i<data.error.length;i++)
			{
			if(data.error[i].param == 'name')
			{
				//console.log(data.error[i].msg)
				$scope.Isname =true; 
				$scope.Msgname = data.error[i].msg;
			}
			else if(data.error[i].param == 'email')
			{	
				//console.log(data.error[i].msg)
				$scope.Isemail =true; 
				$scope.Msgemail = data.error[i].msg;
				
			}else if(data.error[i].param == "comments")
			{	
				//console.log(data.error[i].msg)
				$scope.Iscomments =true; 
				$scope.Msgcomments = data.error[i].msg;
				
			}else if(data.error[i].param == "url")
			{	
				//console.log(data.error[i].msg)
				$scope.Isurl =true; 
				$scope.Msgurl = data.error[i].msg;
				
			}else if(data.error[i].param == "staffno")
			{	
				//console.log(data.error[i].msg)
				$scope.Isstaffno =true; 
				$scope.Msgstaffno = data.error[i].msg;
				
			}else if(data.error[i].param == "password")
			{	
				//console.log(data.error[i].msg)
				$scope.Ispwd =true; 
				$scope.Msgpwd = data.error[i].msg;
				
			}else if(data.error[i].param == "password_confirm")
			{	
				//console.log(data.error[i].msg)
				$scope.Ispwd_con =true; 
				$scope.Msgpwd_con = data.error[i].msg;
				
			}else 
			{	
				console.log(false)
			}			
		}
		}
	else
	{
	alert('Success fully submitted');	
	}

})
}
})

//$http.post("/editcapi",key).success(function(data,status)