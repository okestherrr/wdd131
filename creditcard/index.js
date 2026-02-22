document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".card-form");
    const formMessage = document.getElementById("formMessage");
    const requiredIds = ["cardNumber", "cardHolder", "month", "year", "cvc"];

    function getValue(id) {
        return document.getElementById(id).value.trim();
    }

    function isExpired(month, year) {
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear() % 100;
        return year < currentYear || (year === currentYear && month < currentMonth);
    }

    function showError(message) {
        alert(message);
        return false;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const values = {
            cardNumber: getValue("cardNumber"),
            cardHolder: getValue("cardHolder"),
            month: getValue("month"),
            year: getValue("year"),
            cvc: getValue("cvc")
        };

        const normalizedCardNumber = values.cardNumber.replace(/\s+/g, "");

        formMessage.textContent = "";

        const hasEmptyRequiredField = requiredIds.some(function (id) {
            return !values[id];
        });

        if (hasEmptyRequiredField) {
            return showError("Please fill out all fields.");
        }

        if (normalizedCardNumber !== "1234123412341234") {
            return showError("Card number must be exactly 1234123412341234.");
        }

        if (values.month.length !== 2 || values.year.length !== 2 || isNaN(values.month) || isNaN(values.year)) {
            return showError("Expiration must be in MM and YY format.");
        }

        const numericMonth = Number(values.month);
        const numericYear = Number(values.year);

        if (numericMonth < 1 || numericMonth > 12) {
            return showError("Month must be between 1 and 12.");
        }

        if (isExpired(numericMonth, numericYear)) {
            return showError("This card is expired.try again.");
        }

        if (values.cvc.length < 3 || isNaN(values.cvc)) {
            return showError("CVC must be at least 3 digits.");
        }

        formMessage.textContent = "Payment submitted successfully yayyyy!";
    });

});