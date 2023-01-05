const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    return event.currentTarget.value
        ? (span.textContent = event.currentTarget.value)
        : (span.textContent = "Anonymous");
});