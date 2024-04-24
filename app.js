const music = {"Cheesy Man (MP3)":"https://drive.google.com/drive/folders/1cDy9u0MOV6GGweV4cyCTOMlaoIs6_q9x?usp=drive_link",
    "Cheesy Man (FLAC)":"https://drive.google.com/drive/folders/1boWtM_QllTnIOruRUJKCVadOz6qrUXgb?usp=drive_link",
    "Cheesy Man (AIFF)":"https://drive.google.com/drive/folders/1zgegDesKIop46S5iFymYPNIMwx_XMUit?usp=drive_link"
    };

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