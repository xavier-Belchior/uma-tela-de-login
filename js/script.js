const wrapper = document.querysSelector('.wrapper');
const loginLink = document.querysSelector('.register-link');
const registerLink = document.querysSelector('.login-link');

registerLink.addEventListener('click', ()=>{
	wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
	wrapper.classList.remove('active');
});