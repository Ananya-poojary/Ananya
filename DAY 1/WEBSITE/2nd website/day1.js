// Simple form validation for contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert("Thank you for reaching out! I will get back to you soon.");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });
  