let userAgeInput = prompt("Please enter your age:");
let age = parseInt(userAgeInput);

const getAgeCategory = (age) => {
    let category = "";
    let cssClass = "";

    if (isNaN(age) || age < 0) {
        category = "Please enter a valid age.";
        cssClass = "";
    } else if (age < 13) {
        category = "You are a Child.";
        cssClass = "child";
    } else if (age >= 13 && age <= 17) {
        category = "You are a Teenager.";
        cssClass = "teenager";
    } else {
        category = "You are an Adult.";
        cssClass = "adult";
    }

    alert(category);

    const resultMessageElement = document.getElementById("resultMessage");
    if (resultMessageElement) {
        resultMessageElement.textContent = category;
        resultMessageElement.className = "";
        if (cssClass) {
            resultMessageElement.classList.add(cssClass);
        }
    }
};

getAgeCategory(age);