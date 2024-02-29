const passwordInput = document.getElementById('password');
const confirmPassInput = document.getElementById('confirm-password');

const btn = document.querySelector('.btn-create');
const errorMsg = document.querySelector('.invalid-password');

btn.onclick = () => {
    let pass = passwordInput.value;
    let confirmPass = confirmPassInput.value;

    if (pass !== confirmPass) errorMsg.style.display = 'block';
}
