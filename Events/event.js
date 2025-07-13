// // Selecting the first button by ID
// let btn1 = document.querySelector("#btn1");
// let a = 45; // Initialized counter

// // Regular event handler using external JS
// btn1.onclick = () => {
//     a++; // Increase count on click
//     console.log(`btn1 was clicked ${a} times`);
// };

// If you want to access more event details:
// btn1.onclick = (evt) => {
//     a++;
//     console.log(`btn1 was clicked ${a} times`);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// Preferred method: Using addEventListener (allows multiple functions on same event)
// btn1.addEventListener("click", () => {
//     console.log(`Additional log for same button using addEventListener`);
// });



// // Light/Dark Mode Toggle
// let modeBtn = document.querySelector("#mode");
// let currentMode = "light";

// modeBtn.addEventListener("click", () => {
//     alert("You are trying to change the mode!");

//     if (currentMode === "light") {
//         currentMode = "dark";
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//     } else {
//         currentMode = "light";
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     }

//     console.log("Current mode:", currentMode);
// });


let screenMode = document.querySelector("#mode");
let currentMode = "light";


screenMode.addEventListener("click", () => {
    alert("Do you want to change the screen mode?");
    if (currentMode === "light") {
        currentMode = "dark";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        currentMode === "dark";
        document.body.style.backgroundColor = "light";
        document.body.style.color = "dark";
    }
})

