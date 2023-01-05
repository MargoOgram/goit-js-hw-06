const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    
    console.log('email:', email.value);
    console.log('password:', password.value);

    if (!email.value || !password.value) {
        alert("всі поля мають бути заповнені");
    } else {
        
    }
  
    form.reset()
   
}
















