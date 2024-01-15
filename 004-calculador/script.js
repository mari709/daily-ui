document.addEventListener('DOMContentLoaded', function () {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');
    const frequencySelect = document.getElementById('frequency');
    const calculateBtn = document.querySelector('.calculator__calculate-btn');
    const resultOutput = document.querySelector('.calculator__result');

    calculateBtn.addEventListener('click', function () {
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value) / 100;
        const time = parseFloat(timeInput.value);
        const frequency = parseInt(frequencySelect.value);

        const compoundFrequency = frequency * time;
        const compoundInterest = principal * Math.pow((1 + rate / frequency), compoundFrequency) - principal;
        const result = principal + compoundInterest;

        resultOutput.textContent = `El monto final es: $${result.toFixed(2)}`;
    });
});
