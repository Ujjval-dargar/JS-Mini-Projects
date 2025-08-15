const height_input = document.getElementById("height");
const weight_input = document.getElementById("weight");
const result = document.getElementById("bmi-result");
const calculate_btn = document.getElementById("calculate-btn");
const error_msg = document.querySelector(".error-msg");

calculate_btn.addEventListener("click", function() {
    const height = parseFloat(height_input.value);
    const weight = parseFloat(weight_input.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.textContent = "0";
        result.style.color = "black";
        error_msg.textContent = "Please enter valid height and weight.";
        error_msg.style.display = "block";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    result.textContent = bmi;
    error_msg.textContent = "";
    error_msg.style.display = "none";
    if (bmi < 18.5) {
        result.style.color = "blue";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        result.style.color = "red";
    }
})