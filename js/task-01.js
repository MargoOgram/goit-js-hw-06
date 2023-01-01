const list = document.querySelector("#categories");
console.log("Number of categories:", list.childElementCount);
const item = [...list.children];
item.forEach((element) => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements", element.lastElementChild.childElementCount);
})