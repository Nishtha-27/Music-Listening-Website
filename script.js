function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    // Simple validation (username and password are not empty)
    if (username === '' || password === '') {
      errorMessage.textContent = 'Please enter both username and password.';
    } else {
      errorMessage.textContent = '';
  
      // Perform login logic here (e.g., send data to a server, check against a database)
      // For this example, just show a success message
      window.location.href = 'problem.html';
    }
  }
  