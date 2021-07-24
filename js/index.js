function getData(){
	firstname = document.getElementById('firstname');
	lastname = document.getElementById('lastname');
	email = document.getElementById('email');
	password = document.getElementById('password');
	error = document.getElementsByClassName("error");
	var isEmpty = false;
	
	if(firstname.value === ''){
		error[0].style.display = "flex";
		isEmpty = true;
		firstname.style.border = "2px solid hsl(0, 100%, 74%)"
	}
	else{
		error[0].style.display = "none";
		firstname.style.border = "1px solid #888"
	}
	
	if(lastname.value === ''){
		error[1].style.display = "flex";
		isEmpty = true;
		lastname.style.border = "2px solid hsl(0, 100%, 74%)"
	}
	else{
		error[1].style.display = "none";
		lastname.style.border = "1px solid #888"
	}

	if(email.value === ''){
		error[2].style.display = "flex";
		isEmpty = true;
		email.style.border = "2px solid hsl(0, 100%, 74%)"
	}
	else{
		error[2].style.display = "none";
		email.style.border = "1px solid #888"
	}

	if(password.value === ''){
		error[3].style.display = "flex";
		isEmpty = true;
		password.style.border = "2px solid hsl(0, 100%, 74%)"
	}
	else{
		error[3].style.display = "none";
		password.style.border = "1px solid #888"
	}

	if(isEmpty)
		return false;
	else
		alert(`Registered! \n\nFirst Name: ${firstname.value} \nLast Name: ${lastname.value}\nEmail: ${email.value}\nPassword: ${"*".repeat(password.value.length)}`);
}