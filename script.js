const WHITE_KEYS = ["a", "s", "d", "f", "g", "h", "j"];
const BLACK_KEYS = ["w", "e", "r", "t", "y"];

const keys = document.querySelectorAll(".key");

const whiteKeys = document.querySelectorAll(".key.white");

const blackKeys = document.querySelectorAll(".key.black");


keys.forEach(key => {
    key.addEventListener("click", () => playNote(key));
})


document.addEventListener("keydown", e => {
    if (didKeyMouseUp(e.repeat)) {
        return;
    }

    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    condintionalyPlayNote(blackKeyIndex, whiteKeyIndex);

});

function didKeyMouseUp(repeatedKey) {
    if (repeatedKey) {
        return true;
    }
    return false
}

function condintionalyPlayNote(currentBlackKeyIndex, currentWhiteKeyIndex) {
    if (currentWhiteKeyIndex > -1) {
        playNote(whiteKeys[currentWhiteKeyIndex]);
    }

    if (currentBlackKeyIndex > -1) {
        playNote(blackKeys[currentBlackKeyIndex]);
    }
}

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    handlePianoCellApearence(key, noteAudio);
}

function handlePianoCellApearence(key, noteAudio) {
    key.classList.add("active");
    noteAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    });
}


