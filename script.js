document.getElementById('year').textContent = new Date().getFullYear();


const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
e.preventDefault();
alert('Cảm ơn! Tin nhắn của bạn đã được gửi.');
form.reset();
});