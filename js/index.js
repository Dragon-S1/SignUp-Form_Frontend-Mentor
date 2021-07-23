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
		firstname.style.outline = "hsl(0, 100%, 74%) solid 2px"
	}
	else{
		error[0].style.display = "none";
		firstname.style.outline = "#888 solid 1px"
	}
	
	if(lastname.value === ''){
		error[1].style.display = "flex";
		isEmpty = true;
		lastname.style.outline = "hsl(0, 100%, 74%) solid 2px"
	}
	else{
		error[1].style.display = "none";
		lastname.style.outline = "#888 solid 1px"
	}

	if(email.value === ''){
		error[2].style.display = "flex";
		isEmpty = true;
		email.style.outline = "hsl(0, 100%, 74%) solid 2px"
	}
	else{
		error[2].style.display = "none";
		email.style.outline = "#888 solid 1px"
	}

	if(password.value === ''){
		error[3].style.display = "flex";
		isEmpty = true;
		password.style.outline = "hsl(0, 100%, 74%) solid 2px"
	}
	else{
		error[3].style.display = "none";
		password.style.outline = "#888 solid 1px"
	}

	if(isEmpty)
		return false;
	else
		alert(`Registered! \n\nFirst Name: ${firstname.value} \nLast Name: ${lastname.value}\nEmail: ${email.value}\nPassword: ${"*".repeat(password.value.length)}`);
}