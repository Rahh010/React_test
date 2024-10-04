const form = document.querySelector('.form');
const formBtn = form.querySelector('#form-btn');

formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    handleSubmit();
});

function handleSubmit() {
    const firstName = form.querySelector('input[name="first-name"]').value.trim();
    const lastName = form.querySelector('input[name="last-name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const password = form.querySelector('input[name="password"]').value.trim();
    const error = form.querySelector('#error');

    error.innerHTML = "";

    const nameRegex = /^[A-Za-z]+$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const phoneRegex = /^[0-9]{10}$/;
    
    if (!firstName || !lastName || !email || !phone || !password) {
        error.innerHTML = "All fields are required.";
        error.style.color = 'red';
        return;
    }

    if (!nameRegex.test(firstName)) {
        error.innerHTML = "First Name must contain only letters.";
        error.style.color = 'red';
        return;
    }

    if (!nameRegex.test(lastName)) {
        error.innerHTML = "Last Name must contain only letters.";
        error.style.color = 'red';
        return;
    }

    if (!emailRegex.test(email)) {
        error.innerHTML = "Please enter a valid email address.";
        error.style.color = 'red';
        return;
    }

    if (!phoneRegex.test(phone)) {
        error.innerHTML = "Phone Number must be exactly 10 digits.";
        error.style.color = 'red';
        return;
    }

    if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters long.";
        error.style.color = 'red';
        return;
    }

    // Create an object with the form details
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password
    };

    console.log(formData);
}
