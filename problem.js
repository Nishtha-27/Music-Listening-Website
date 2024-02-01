function handleSelection(selectElement) {
    var selectedValue = selectElement.value;
    console.log("Selected option:", selectedValue);
    // Perform other actions based on the selected value
  }
  function getSelectedOptions() {
    var selectedOptions = [];
    var checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]:checked');
    
    checkboxes.forEach(function(checkbox) {
      selectedOptions.push(checkbox.value);
    });
    
    console.log('Selected Options:', selectedOptions);
  }
  function validateAge() {
    // Get the user input
    var ageInput = document.getElementById('ageInput').value;
  
    // Check if the input is a positive integer
    if (/^\d+$/.test(ageInput) && parseInt(ageInput) > 0) {
      // Valid input
      document.getElementById('errorMessage').textContent = '';
      alert('Age submitted: ' + ageInput);
      // You can proceed with further actions or submit the form
    } else {
      // Invalid input
      document.getElementById('errorMessage').textContent = 'Please enter a valid positive integer for age.';
    }
  }