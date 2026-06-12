// Safely grab elements from the DOM
const titleHeadingElement = document.getElementById('title') as HTMLHeadingElement;
const alertButtonElement = document.getElementById('alertBtn') as HTMLButtonElement;

console.log("START APP.TS IN SRC");

// Modify the heading text
if (titleHeadingElement) {
    titleHeadingElement.innerText = "Hello from TypeScript!";
}

// Add a button click event listener
alertButtonElement?.addEventListener('click', () => {
    alert("TypeScript code is working flawlessly!");
});
