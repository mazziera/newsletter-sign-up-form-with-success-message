const formContainer = document.querySelector('.main-container');
const form = document.querySelector('.form');
console.log(form);

const successContainer = document.querySelector('.success-container');
const dismissButton = document.querySelector('.dismiss-button')

const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


form.addEventListener('submit', (event) => {
    event.preventDefault(); //Impede que ao enviar o formulario, a pagina recarregue, evitando perder informação a ser enviada.

    const emailInput = document.querySelector('.email-input');

    const errorMessage = document.querySelector('.error-message');

    const showEmail = document.querySelector('#email');
    
    if(emailInput.value === ''){
        errorMessage.style.display = 'block';

        emailInput.style.borderColor = 'hsl(4, 100%, 67%)';

        emailInput.style.backgroundColor = 'hsl(4, 100%, 89%)';

    } else if (regex.test(emailInput.value) && emailInput.value != ''){

        successContainer.style.display = 'block'
        formContainer.style.display = 'none';
        showEmail.innerHTML = emailInput.value;

        emailInput.value= '';

        errorMessage.style.display = '';
        emailInput.style.borderColor = '';
        emailInput.style.backgroundColor = '';
        
    };   
});

dismissButton.addEventListener('click', () => {
    
    successContainer.style.display = 'none';
    formContainer.style.display = 'flex';
});