// //funkcje testujące
// function testText(field, lng) {
//     return field.value.length >= lng;
// };

// function testEmail(field) {
//     const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
//     return reg.test(field.value);
// };

// function toggleErrorField(field, show) {
//     const errorText = field.nextElementSibling;
//     if (errorText !== null) {
//         if (errorText.classList.contains("form-error-text")) {
//             errorText.style.display = show ? "block" : "none";
//         }
//     }
// };

// function markFieldAsError(field, show) {
//     if (show) {
//         field.classList.add("field-error");
//     } else {
//         field.classList.remove("field-error");
//         toggleErrorField(field, false);
//     }
// };

// //pobieram elementy
// const form = document.querySelector("form");
// const inputName = document.querySelector("input[name=name]");
// const inputEmail = document.querySelector("input[name=email]");
// const formMessage = document.querySelector(".form-message");

// // //etap 1 : podpinam zdarzenia
// // inputName.addEventListener("change", e => markFieldAsError(e.target, !testText(e.target, 3)));
// // inputEmail.addEventListener("change", e => markFieldAsError(e.target, !testEmail(e.target)));

// form.addEventListener("submit", e => {
//     e.preventDefault();

//     let formErrors = false;

//     //2 etap - sprawdzamy poszczególne pola gdy ktoś chce wysłać formularz
//     //chowam błędy by zaraz w razie czego je pokazać
//     for (const el of [inputName, inputEmail]) {
//         markFieldAsError(el, false);
//         toggleErrorField(el, false);
//     }

//     if (!testText(inputName, 5)) {
//         markFieldAsError(inputName, true);
//         toggleErrorField(inputName, true);
//         formErrors = true;
//     }

//     if (!testEmail(inputEmail)) {
//         markFieldAsError(inputEmail, true);
//         toggleErrorField(inputEmail, true);
//         formErrors = true;
//     }

//     if (!formErrors) {
//         e.target.submit();
//     }
// });

// // function sprawdzDane()
// // {
// //   let Name = document.getElementfunction showMessage(input, message, type) {
	// get the small element and set the message
	

//   console.log("test");

//   let newsletterForm = document.getElementById('newsletter-form');
//   let allAgreeChx = document.getElementById('all-agree');

//   const validate = (event) => {

//     let txtEmail = document.getElementById('email');
//     let txtName = document.getElementById('name');
//     let agree = document.getElementById('agree');
//     let errors = document.getElementById('errors');

//     errors.innerHTML = '';

//     if (txtEmail.value.trim() === '' ) {
//       let liError = document.createElement('li');
//       liError.innerText = 'Wypełnij pole!';
//       errors.appendChild(liError);
//     }
//     if (!txtEmail.value.includes('@')) {
//       let liError = document.createElement('li');
//       liError.innerText = 'Adres E-mail powinie zawierać @';
//       errors.appendChild(liError);
//     }
//     if (txtName.value.trim() === '') {
//       let liError = document.createElement('li');
//       liError.innerText = 'Wypełnij pole!';
//       errors.appendChild(liError);
//     }
//   if (!agree.checked) {
//     let liError = document.createElement('li');
//     liError.innerText = 'Nie wyraziłeś Zgody !';
//     errors.appendChild(liError);
//     }
//     if(errors.children.length > 0) {
//       event.preventDefault();
//   }

//   }
//   const Agree = (event) => {
//     let agree = document.getElementById('agree');
    
//     agree.checked = event.target.checked;

//     agree.disabled = event.target.checked;
   
// }

function showMessage(input, message, type) {
	
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "";
const EMAIL_REQUIRED = "";
const EMAIL_INVALID = "";

form.addEventListener("submit", function (event) {
	
	event.preventDefault();

	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});


