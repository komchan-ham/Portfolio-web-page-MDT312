window.onload = loginLoad;
function loginLoad(){
	var loginform = document.getElementById("myLogin");
 
    loginform.onsubmit = checkLogin;
}
window.onload = loginLoad;

function warningText(text){
	var loginform = document.forms["myLogin"];
	loginform.username.value = null;
	loginform.password.value = null;
	alert(text);
    return false;
}

function checkLogin(){
	
		var loginform = document.forms["myLogin"];
		const queryString = window.location.search;
		const urlParam = new URLSearchParams(queryString);
		const username = urlParam.get("username");
		const password = urlParam.get("password");

		else if (loginform.username.value != username)
		{
			return warningText("username or password are wrong");
		} 

		else if (loginform.password.value != password)
		{
			return warningText("username or password are wrong");
		}

	
		console.log(loginform);
		alert("ลงชื่อผ่านแล้ว");
		return false
}

			