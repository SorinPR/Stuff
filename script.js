// selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

let sumbitButton = document.querySelector('#sumbit-button');
sumbitButton.addEventListener('click', function(e) {
	e.preventDefault();

     let emailValue = emailElement.value;
     let messageValue = messageElement.value;

     if (emailValue.includes('@')) {
     	//all good
     	alert('GG EZ');
     } else {
     	alert('We john , Mai pune si tu @');
   
     }

	console.log('Email: ',emailValue);
	console.log('Message: ',messageValue);
})
//attaching 'click listeners'
//getting user entered values
//javascript validations