document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        clearErrors();
        
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        let isValid = true;
        
        if (!email.value) {
            showError(email, 'Por favor, insira seu email');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Por favor, insira um email válido');
            isValid = false;
        }
        
        if (!password.value) {
            showError(password, 'Por favor, insira sua senha');
            isValid = false;
        } else if (password.value.length < 6) {
            showError(password, 'A senha deve ter pelo menos 6 caracteres');
            isValid = false;
        }
        
        if (isValid) {
            alert('Login realizado com sucesso!');
            loginForm.submit();
        }
    });
    
    function showError(input, message) {
        input.classList.add('error');
        const errorDiv = document.createElement('span');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }
    
    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
        
        const errorInputs = document.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        clearErrors();
        
        const fullname = document.getElementById('fullname');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        
        let isValid = true;
        
        if (!fullname.value) {
            showError(fullname, 'Por favor, insira seu nome completo');
            isValid = false;
        }
        
        if (!email.value) {
            showError(email, 'Por favor, insira seu email');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Por favor, insira um email válido');
            isValid = false;
        }
        
        if (!phone.value) {
            showError(phone, 'Por favor, insira seu telefone');
            isValid = false;
        }
        
        if (!password.value) {
            showError(password, 'Por favor, crie uma senha');
            isValid = false;
        } else if (password.value.length < 6) {
            showError(password, 'A senha deve ter pelo menos 6 caracteres');
            isValid = false;
        }
        
        if (!confirmPassword.value) {
            showError(confirmPassword, 'Por favor, confirme sua senha');
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'As senhas não coincidem');
            isValid = false;
        }
        
        if (isValid) {
            alert('Cadastro realizado com sucesso!');
            registerForm.submit();
        }
    });
    
    function showError(input, message) {
        input.classList.add('error');
        const errorDiv = document.createElement('span');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }
    
    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
        
        const errorInputs = document.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            value = '(' + value;
            if (value.length > 3) {
                value = value.substring(0, 3) + ') ' + value.substring(3);
            }
            if (value.length > 10) {
                value = value.substring(0, 10) + '-' + value.substring(10, 15);
            }
        }
        e.target.value = value;
    });
});