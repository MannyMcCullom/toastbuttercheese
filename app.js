// Goal--------------------------------------------------------------------------------------------------

// Initial Code--------------------------------------------------------------------------------------------

// CheesyMan Album
const cheesyManLinks = {"Cheesy Man (MP3)":"https://drive.google.com/drive/folders/1Qwt6ayV0liPIMKs6lF9uvXOT1arupG8r?usp=drive_link"
};

const cheesyMan = {"cover": "assets/Cheesy Man (Album Cover).jpg", "links": cheesyManLinks};

// const audio = new Audio("assets/05_pspsps_ToastButterCheese.mp3");

const musicCards = document.createElement("div");
musicCards.classList.add("musicCards");
document.body.append(musicCards);

// Functions--------------------------------------------------------------------------------------------

function removeAllLinks(card) {
    while (card.firstChild) {
        card.removeChild(card.firstChild);
    }
}

// This function appends each property inside object to specific element.
function addLinks (obj, el) {
    for (prop in obj) {
        console.log(obj[prop]);
        const div = document.createElement("a");
        div.classList.add("links");
        div.innerText = prop;
        div.setAttribute("href", obj[prop]);
        el.append(div);
        const br = document.createElement("br");
        el.append(br);
        const audio = new Audio("assets/05_pspsps_ToastButterCheese.mp3");
        const play = document.createElement("button");
        const stop = document.createElement("button");
        play.innerHTML = "Play";
        stop.innerHTML = "Stop";
        play.addEventListener("click", ()=>{
            audio.play();
        })
        stop.addEventListener("click", ()=>{
            audio.load();
        })
        el.append(play);
        el.append(stop);

    }
}

// fnwesoilnvfweoinv
function playMusic(thing) {
    thing.play();
}

function stopMusic(thing) {
    thing.load();
}
// This function moves card on screen.
function addCard(el) {
    el.style.setProperty("left", `0px`);
}

// This function moves card off screen.
function removeCard(el) {
    el.style.setProperty("left", `-500px`);
}

// Create music card
function createMusicCard(obj) {
    const card = document.createElement('div');
    card.classList.add("card");
    const cover = document.createElement("img");
    cover.setAttribute("src", obj["cover"]);
    cover.classList.add("cover");
    card.append(cover);
    const br = document.createElement("br");
    card.append(br);
    addLinks(obj["links"], card);
    musicCards.append(card);
}

// Running Code--------------------------------------------------------------------------------------------

createMusicCard(cheesyMan);
// createMusicCard(cheesyMan);