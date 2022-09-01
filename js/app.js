function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }

}

function genaratePin() {
    const random = Math.round(Math.random() * 10000)
    return random;
}

document.getElementById('genarate-pin').addEventListener('click', function () {
    const pin = getPin();
    // console.log(pin)
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
    console.log();
});

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    const pinSuccessMassege = document.getElementById('pin-success');
    const pinFailureMassege = document.getElementById('pin-failure');

    if (typedNumber === currentPin) {
        pinSuccessMassege.style.display = 'block';
        pinFailureMassege.style.display = 'none'
    }
    else {
        pinFailureMassege.style.display = 'block'
        pinSuccessMassege.style.display = 'none'
    }
})