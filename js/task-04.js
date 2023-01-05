const button = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
};

let counter = 0;

const increment = () => {
    counter += 1;
    button.span.textContent = counter;
};

const decrement = () => {
    counter -= 1;
    button.span.textContent = counter;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);

