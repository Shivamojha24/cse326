let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
}
window.onscroll = () =>{
 menu.classList.remove('fa-times');
 navbar.classList.remove('active');
 if(window.scrollY > 60){
 document.querySelector('#scroll-top').classList.add('active');
 }else{
 document.querySelector('#scroll-top').classList.remove('active');
 }
} 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        // Get form data
        const cardNumber = document.getElementById('card-number').value;
        const cardName = document.getElementById('card-name').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        // Basic validation
        if (!cardNumber || !cardName || !expiryDate || !cvv) {
            messageDiv.textContent = 'Please fill in all fields.';
            return;
        }

        // Validate card number format (simple validation)
        if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
            messageDiv.textContent = 'Invalid card number format. Use XXXX XXXX XXXX XXXX.';
            return;
        }

        // Validate expiry date format (simple validation)
        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            messageDiv.textContent = 'Invalid expiry date format. Use MM/YY.';
            return;
        }

        // Validate CVV format
        if (!/^\d{3}$/.test(cvv)) {
            messageDiv.textContent = 'Invalid CVV format. Use three digits.';
            return;
        }

        // If everything is valid, show success message (replace with real payment processing logic)
        messageDiv.textContent = 'Payment information is valid. Proceeding with payment...';
        messageDiv.style.color = 'green';

        // Here, you would typically handle form submission to your payment gateway
    });
});
document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let cardNumber = document.getElementById('cardNumber').value;
    let expiryDate = document.getElementById('expiryDate').value;
    let cvv = document.getElementById('cvv').value;
    let amount = document.getElementById('amount').value;

    if (name === '' || cardNumber === '' || expiryDate === '' || cvv === '' || amount === '') {
        alert('Please fill in all the fields');
        return;
    }

    alert(`Payment of ${amount} initiated for ${name}`);
    // Send payment info to backend or payment gateway API here
});
