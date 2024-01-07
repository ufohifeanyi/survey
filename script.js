document.getElementById('mobile-menu').addEventListener('click', function () {
    var navlist =
        document.querySelector('.nav-list');
    navlist.classList.toggle('show');
});

function toggleAccordion(sectionNumber) {
    var content =
        document.getElementById('section' + sectionNumber);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

function validateLogin() {
    var username =
        document.getElementById("username").value;
    var password =
        document.getElementById("password").value;
    var errormessage =
        document.getElementById("error-message");

    if (username === "user" && password === "password") {
        errormessage.innerText = "Login successful";
        errormessage.style.color = "green";
    } else {
        errormessage.innerText = "Invalid username or password. please try again.";
        errormessage.style.color = "red";
    }
}

function validateSignup() {
    var fullName =
        document.getElementById("fullName").value;
    var email =
        document.getElementById("email").value;
    var password =
        document.getElementById("password").value;
    var comfirmPassword =
        document.getElementById("comfirmPassword").value;
    var checkbox =
        document.getElementById("checkbox").value;
    var feedbackMessage =
        document.getElementById("feedback-message");

    if (fullName && email && checkbox && password && comfirmPassword
        && password && comfirmPassword
        === comfirmPassword) {
        feedbackMessage.innerText = "sign up succcesful!";
        feedbackMessage.style.color = "green";
    } else {
        if (password !== comfirmPassword) {
            feedbackMessage.innerText = "password do not match.";
        } else {
            feedbackMessage.innerText = "please fill in all the fields.";
        }
        feedbackMessage.style.color = "red";
    }
}

const countries = [
    "Afhanistan", "Albania", "Algeria", "Andorra", "Angola", "Ghana", "Nigeria", "Camerron."
];

function handleInput() {
    const input =
        document.getElementById("countryInput");
    const autocompleteList =
        document.getElementById("autocompleteList");
    const inputValue =
        input.value.toLowerCase();

    autocompleteList.innerHTML = "";

    const filteredCountries =
        countries.filter(country =>
            country.toLowerCase().includes(inputValue)
        );

    filteredCountries.forEach(country => {
        const listItem =
            document.createElement("div");

        listItem.classList.add("autocomplete-list-item");
        listItem.textContent = country;
        listItem.addEventListener("click", () => {
            input.value = country;
            autocompleteList.innerHTML =
                "";
        });

        autocompleteList.appendChild(listItem);
    });
}
