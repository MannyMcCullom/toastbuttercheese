const link = "https://drive.google.com/file/d/1r6lUA4g5DYX9pIARhWoIXtO6lZEjsP1p/view?usp=drive_link";
console.log("here");
const grid = document.querySelector("#gridContainer");
const div = document.createElement("a");
div.classList.add("num");
div.innerText = "music";
div.setAttribute("href", link);
grid.append(div);