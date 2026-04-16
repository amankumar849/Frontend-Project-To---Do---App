// Selectors - Ab sahi se select kar rahe hain
let addBtn = document.querySelector(".input-area button");  // Add Task button
let themeBtn = document.getElementById("theme-toggle");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// ================== Add New Task ==================
addBtn.addEventListener("click", function () {
    if (inp.value.trim() === "") {
        alert("Please enter a task!");   // optional
        return;
    }

    let item = document.createElement("li");
    item.innerText = inp.value.trim();

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);

    inp.value = "";        // input clear
    inp.focus();           // cursor wapas input mein
});

// ================== Delete Task (Event Delegation) ==================
ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});

// ================== Theme Toggle ==================
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = "☀️ Day Mode";
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️ Day Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.innerHTML = "🌙 Night Mode";
        localStorage.setItem("theme", "light");
    }
});