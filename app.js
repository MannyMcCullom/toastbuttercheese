const music = {"Cheesy Man (mp3)":"https://drive.google.com/drive/folders/1Qwt6ayV0liPIMKs6lF9uvXOT1arupG8r?usp=sharing",
thing2:"https://drive.google.com/drive/folders/1xW1u4kVKdd8U_7RHpURQRiCacQ-mVQDB?usp=sharing"};

console.log("here");
const grid = document.querySelector("#gridContainer");
// const div = document.createElement("a");
// div.classList.add("num");
// div.innerText = "music";
// div.setAttribute("href", links.thing1);
// grid.append(div);

function musicLinks (obj) {
    for (prop in obj) {
        console.log(obj[prop]);
        const div = document.createElement("a");
        div.classList.add("num");
        div.innerText = prop;
        div.setAttribute("href", obj[prop]);
        grid.append(div);
    }
}

musicLinks(music);