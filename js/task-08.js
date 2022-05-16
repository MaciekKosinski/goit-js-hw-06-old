const formElement = document.querySelector('.login-form');

function checkSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("complete all data, please");
    }

    const result = { email: email.value, password: password.value };
    console.log(result);
    event.currentTarget.reset();
}
    formElement.addEventListener("submit", checkSubmit);
