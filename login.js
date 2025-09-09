const esqueciSenha = document.querySelector('.esqueci-senha');
const passwordInput = document.querySelector('password');

togllePassword.addEventListener('click', () =>{
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togllePassword.classList.toggle('fa-eye-slash');
});


const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').ariaValueMax;
    const password = passwordInput.value;

    if(!email || !password){
        alert('Preencha todos os campos!');
        return;
    }

    alert('Email: ${email}\nSenha: ${password}');
});