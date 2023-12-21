document.addEventListener("DOMContentLoaded", function () {

    var inputBox = document.getElementById("inputbox");
    var buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {
            var buttonText = button.textContent;

            if (buttonText === "AC") {
                inputBox.value = "";
            } 
            else if (buttonText === "DEL") {
                inputBox.value = inputBox.value.slice(0, -1);
            } 
            else if (buttonText === "=") {
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    inputBox.value = "Error";
                }
            }
             else {
                inputBox.value += buttonText;
            }
        });
    });
});
