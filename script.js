const form = document.getElementById('waitlistForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value.trim();
      const username = document.getElementById('username').value.trim();

      if (!email || !username) {
        message.textContent = 'Please fill in all fields.';
        return;
      }

      if (!validateEmail(email)) {
        message.textContent = 'Please enter a valid email.';
        return;
      }

      message.style.color = 'green';
      message.textContent = 'Thank you for your registration! See you soon~';
      form.reset();
    });

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }