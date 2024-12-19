const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbutton = document.getElementById('qr-button');

qrbutton.addEventListener('click', () => {
    const inputValue = qrinput.value; // Corrected the case

    if (!inputValue) {
        alert('Please enter a valid URL');
        return;
    } else {
        // Corrected string interpolation with backticks
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt = `QR Code for ${inputValue}`;  // Corrected string interpolation with backticks
    }
});
 