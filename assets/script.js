const form = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');

const validateForm = () => {
    let isValid = true;

    //очистить ошибки 
    document.querySelectorAll('.error').forEach(error => {
        error.classList.add('hidden');
    });

    //валидация имени

    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s]{2,20}$/;
    if (!namePattern.test(name.value)) {
        nameError.textContent = 'Имя должно содержать только буквы и пробелы (2-20 символов)';
        nameError.classList.remove('hidden');
        isValid = false;
    }

    //валидация электронной почты 
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.checkValidity()) {
        emailError.textContent = 'Введите корректный email';
        emailError.classList.remove('hidden');
        isValid = false;
    }

    //валидация возраста 
    const age = document.getElementById('age');
    const ageError = document.getElementById('ageError');
    if (!age.value) {
        ageError.textContent = 'Введите ваш возраст';
        ageError.classList.remove('hidden');
        isValid = false;
    }

        //валидация профессии 
        const profession = document.getElementById('profession');
        const professionError = document.getElementById('professionError');
        if (profession.value === '') {
            professionError.textContent = 'Выберите профессию';
            professionError.classList.remove('hidden');
            isValid = false;
        }

        //валидация пароля 
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(password.value)) {
            passwordError.textContent = 'Пароль должен содержать минимум 8 символов, одну заглавную букву и одну цифру';
            passwordError.classList.remove('hidden');
            isValid = false;
        }

                    // Валидация согласия
                    const consent = document.getElementById('consent');
                    const consentError = document.getElementById('consentError');
                    if (!consent.checked) {
                        consentError.textContent = 'Необходимо согласие на обработку данных';
                        consentError.classList.remove('hidden');
                        isValid = false;
                    }
        
                    submitBtn.disabled = !isValid;
                    return isValid;
};

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        console.log({
            name: form.name.value,
            email: form.name.value,
            age: form.age.value,
            gender: form.gender.value,
            profession: form.profession.value,
            password: form.password.value,
        });
        form.reset();
        submitBtn.disabled = true;
    }
});

form.addEventListener('input', validateForm);
form.addEventListener('focusout', validateForm);