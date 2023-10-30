document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");

    calculateButton.addEventListener("click", calculateEMI);

    function calculateEMI() {
        const loanAmount = parseFloat(document.getElementById("loan-amount").value);
        const interestRate = parseFloat(document.getElementById("interest-rate").value);
        const loanTenure = parseFloat(document.getElementById("loan-tenure").value);

        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
            alert("Please enter valid numbers.");
            return;
        }

        const monthlyInterestRate = (interestRate / 12) / 100;
        const emi = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTenure));
        const emiValue = document.getElementById("emi-value");
        emiValue.textContent = emi.toFixed(2);
    }
});
