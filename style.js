// Change background dynamically
function updateBackground(event) {
    document.body.style.backgroundColor = `rgb(${event.clientX % 255}, ${event.clientY % 255}, ${(event.clientX + event.clientY) % 255})`;
}

document.body.addEventListener("mouseover", function() {
    document.body.style.transition = "background-color 0.5s ease"; // Smooth transition for background color change
    document.body.style.backgroundColor = "lightblue"; // Change to light blue on hover
});

document.body.addEventListener("mouseout", function() {
    document.body.style.transition = "background-color 0.5s ease"; // Smooth transition for background color change
    document.body.style.backgroundColor = ""; // Reset to default on mouse out
});

function showAlert() {
    alert("Surprise! Welcome to Creative Web World.");
}

// Modify style of an element
function changeStyle(element) {
    element.style.backgroundColor = "gold";
    element.style.color = "black";
    element.textContent = "Clicked!";
}

// Populate a list dynamically
function populateList() {
    const list = document.getElementById("dynamic-list");
    const items = ["One", "Two", "Three", "Four", "Five"];
    list.innerHTML = ""; // Clear previous content
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function updateBackground(event) {
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const red = Math.round((x / width) * 255);
    const blue = Math.round((y / height) * 255);
    const green = Math.round(((x + y) / (width + height)) * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
