function validationForm() {
	let form = document.getElementById('form')
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value

	form.addEventListener('submit', e => {
		e.preventDefault()

		validationForm()
	})

	let f = document.getElementById('frontend-checkbox')
	let b = document.getElementById('backend-checkbox')
	let m = document.getElementById('mobile-checkbox')
	let g = document.getElementById('graphics-checkbox')

	form.addEventListener('submit', function validateCheckbox(e) {
		e.preventDefault()
		if (f.checked === true || b.checked === true || m.checked === true || g.checked === true) {
			return true
		} else {
			alert('Nie wybrałeś żadnej sekcji! Spróbuj ponownie.')
			return false
		}
	})

	if (firstName == '') {
		alert('Imię nie może pozostać puste! Spróbuj ponownie.')
		document.myForm.firstName.focus()
		return false
	}
	if (lastName == '') {
		alert('Nazwisko nie może pozostać puste! Spróbuj ponownie.')
		return false
	}
	if (email == '') {
		alert('Pole adresu e-mail nie może pozostać puste! Spróbuj ponownie.')
		return false
	} else {
		return true
	}
}
