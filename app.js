const links = {"beat pack":"https://drive.google.com/file/d/1dj5L5odwaHNIWrxQR8vjed9vMPI6wrK4/view?usp=drive_link",
thing2:"https://drive.google.com/drive/folders/1xW1u4kVKdd8U_7RHpURQRiCacQ-mVQDB?usp=sharing"};

console.log("here");
const grid = document.querySelector("#gridContainer");
// const div = document.createElement("a");
// div.classList.add("num");
// div.innerText = "music";
// div.setAttribute("href", links.thing1);
// grid.append(div);

function addLinks (obj) {
    for (prop in obj) {
        console.log(obj[prop]);
        const div = document.createElement("a");
        div.classList.add("num");
        div.innerText = prop;
        div.setAttribute("href", obj[prop]);
        grid.append(div);
    }
}

addLinks(links);