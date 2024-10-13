// scripts/main.js

document.addEventListener("DOMContentLoaded", () => {
    // Activate Bootstrap scrollspy
    const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    dataSpyList.forEach(function (dataSpyEl) {
      bootstrap.ScrollSpy.getInstance(dataSpyEl) || new bootstrap.ScrollSpy(dataSpyEl, {})
    });
  
    // Optional: Additional interactivity can be added here
  });

  // scripts/main.js

document.addEventListener("DOMContentLoaded", () => {
    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Simple validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }
  
      // You can add more complex validation or AJAX submission here
  
      alert("Thank you for your message!");
      form.reset();
    });
  });