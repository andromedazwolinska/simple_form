document.addEventListener("DOMContentLoaded", () => {
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    emailError.style.visibility = 'hidden';
    passwordError.style.visibility = 'hidden';
});

function validateEmail() {
    const email = document.getElementsByName('email')[0];
    const emailRegExp = new RegExp(/^\S+@\S+\.\S+$/);
    const emailError = document.getElementById('email-error');
    if (!email.value.length) {
        emailError.innerText = 'Email is required.';
        emailError.style.visibility = 'visible';
        return false;
    } else if (!emailRegExp.test(email.value)) {
        emailError.innerText = 'Email is incorrect.';
        emailError.style.visibility = 'visible';
        return false;
    } else {
        emailError.style.visibility = 'hidden';
        return true;
    }
};
function validatePassword() {
    const password = document.getElementsByName('password')[0];
    const passwordRegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    const passwordError = document.getElementById('password-error');
    if (!password.value.length) {
        passwordError.innerText = 'Password is required.';
        passwordError.style.visibility = 'visible';
        return false;
    } else if (!passwordRegExp.test(password.value)) {
        passwordError.innerText = 'Password is incorrect.';
        passwordError.style.visibility = 'visible';
        return false;
    } else {
        passwordError.style.visibility = 'hidden';
        return true;
    }
};

function onSubmitClick() {
    const validateEmailResult = validateEmail();
    const validatePasswordResult = validatePassword();
    if (validateEmailResult && validatePasswordResult) {
        alert('You have been registered successfully!');
    }
};

function submitForm() {
}
