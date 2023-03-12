// email validator using regex
function validateEmail(email) {
    // regular expression pattern for validating email addresses
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // test the input email against the pattern and return true or false
    return pattern.test(email);
  }

const button = document.querySelector('button');
const emailValue = document.querySelector('#email').value;
const password1 = document.querySelector('#pswd').value;
const password2 = document.querySelector('#cpswd').value;

button.addEventListener('click', function() {
    //validate email
    if (validateEmail(emailValue) === false) {
        console.log('problem')
    } 
    //check if password matches
    if (password1 === password2) {
        console.log('Registered')
    } else {
        console.log('passwords do not matches')
    }

});