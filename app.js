const link = "https://drive.google.com/drive/folders/1cVCbVrcQBlTNYkeXTvSWlXupiIXZBVYL?usp=drive_link";
console.log("here");
const grid = document.querySelector("#gridContainer");
const div = document.createElement("a");
div.classList.add("num");
div.innerText = "music";
div.setAttribute("href", link);
grid.append(div);