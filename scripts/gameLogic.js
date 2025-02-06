const canvases = {
    "The Unknown": document.getElementById("The Unknown"),
    "Main": document.getElementById("Main"),
}

const sizes = {
    "max": "min",
    "mid": "mid",
    "min": "max"
}

const characters = {
    "The Unknown": "The Unknown",
    "Main": "Taskmaster",
};

const speech = `
    <div id="current" class="replica">
        <div class="name"></div>
        <div class="text"></div>
    </div>
    `;



const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function printReplica(canvas, text, delay) {
    const curCanvas = canvases[canvas];
    const character = characters[canvas];
    curCanvas.innerHTML += speech;
    const replica = document.getElementById("current");
    replica.children[0].innerHTML = character + ":";
   
    await printText(replica.children[1], text, delay);
    
    replica.removeAttribute("id");
}

async function printText(destination, text, delay) {    
    for (let i = 0; i < text.length; i++) {   
        await sleep(delay);
        destination.innerHTML += text[i];
    }
}

async function setCanvas(canvas, size) {
    const mainCanvas = canvases[canvas];
    const sideCanvas = canvases[canvas === "The Unknown" ? "Main" : "The Unknown"];
    mainCanvas.scrollTop = mainCanvas.scrollHeight;
    sideCanvas.scrollTop = sideCanvas.scrollHeight;
    mainCanvas.classList.remove("min", "mid", "max");
    mainCanvas.classList.add(size);
    sideCanvas.classList.remove("min", "mid", "max");
    sideCanvas.classList.add(sizes[size]);

    await sleep(1100);

}
