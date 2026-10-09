let form = document.querySelector("#contact-me form")

form.addEventListener("submit" , function(event) {
    event.preventDefault()

    isValid = true

    let name = document.querySelector("#name").value
    let password = document.querySelector("#password").value
    let email = document.querySelector("#email").value
    let subject = document.querySelector("#subject").value
    let country = document.querySelector("#country").value
    let message = document.querySelector("#message").value
    let nameMessage = document.querySelector("#nameMessage")
    let emailMessage = document.querySelector("#emailMessage")
    let passwordMessage = document.querySelector("#passwordMessage")
    let subjectMessage = document.querySelector("#subjectMessage")
    let countryMessage = document.querySelector("#countryMessage")
    let gender = document.querySelector(`input[name="gender"]:checked`)
    let genderMessage = document.querySelector("#genderMessage")
    let successMessage = document.querySelector("#successMessage")

    nameMessage.textContent = "";
    emailMessage.textContent = "";
    passwordMessage.textContent = "";
    subjectMessage.textContent = "";
    countryMessage.textContent = "";
    genderMessage.textContent = "";
    successMessage.textContent = "";

    if (name==="") {
        nameMessage.textContent = "Please enter your name"
        isValid = false
    }
    if (email === "") {
        emailMessage.textContent = "Please enter your email"
        isValid = false
    } else if (!email.includes("@") || !email.includes(".")) {
        emailMessage.textContent = "Please enter a valid email"
        isValid = false
    }

    if (password === "") {
        passwordMessage.textContent = "Please enter your password"
        isValid = false
    } else if (password.length < 8) {
        passwordMessage.textContent = "Password must be at least 8 characters"
        isValid = false
    }

    if (subject === "") {
        subjectMessage.textContent = "Please enter a subject"
        isValid = false
    }

    if (country === "") {
        countryMessage.textContent = "Please choose a country"
        isValid = false
    }

    if (gender === null) {
        genderMessage.textContent = "Choose your gender"
        isValid = false
    }
    if (isValid) {
        successMessage.textContent = "Form submitted successfuly!"
        form.reset()
        // console.log("form is valid")
    }

    // console.log(name)
    // console.log(email)
    // console.log(message)
    // console.log(password)
    // console.log(country)
    // console.log(subject)
})