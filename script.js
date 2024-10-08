document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
        alert('All fields are required.');
        return;
    }
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('contactForm').reset();
});