// script.js
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can add your own logic here, such as sending the form data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form after submission
    form.reset();
});
