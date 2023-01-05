// const size = {
//   input: document.querySelector('#font-size-control'),
//   output: document.querySelector('#text'),
// };
// size.input.addEventListener('input', sizeChange);
// function sizeChange() {
//   size.output.style.fontSize = `${size.input.value}px`;
// }


const inputEl = document.querySelector('#font-size-control');
const output = document.querySelector('#text');
inputEl.addEventListener('input', () => {
  output.style.fontSize = `${inputEl.value}px`;
});