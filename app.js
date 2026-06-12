"use strict";
// Safely grab elements from the DOM
const titleHeadingElement = document.getElementById('title');
const alertButtonElement = document.getElementById('alertBtn');
console.log("START APP.TS");
// Modify the heading text
if (titleHeadingElement) {
    titleHeadingElement.innerText = "Hello from TypeScript!";
}
// Add a button click event listener
alertButtonElement === null || alertButtonElement === void 0 ? void 0 : alertButtonElement.addEventListener('click', () => {
    alert("TypeScript code is working flawlessly!");
});
