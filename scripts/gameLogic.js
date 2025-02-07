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

const order = [0, 1, 2, 3];
const actionScreen = document.getElementById("actionScreen");
const input = document.querySelector(".input");

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const randomNum = (max) => Math.floor(Math.random() * max);

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

async function showInput() { 
    document.querySelector(".game").classList.add("withInput");
    await sleep(500);
}

async function hideInput() {
    document.querySelector(".game").classList.remove("withInput");
    await sleep(500);
}

let rep = false;

async function game(questions, answers, correctAns) {
    actionScreen.classList.add("prep");
    await sleep(200);

    for (let i = 0; i < questions.length; i++) {
        await actionEvent(questions[i], answers[i], correctAns[i], i);

        if (rep) {
            i--;
        }
    }
    
    for (let i = 0; i < questions.length; i++) {
        actionScreen.children[i].classList.remove(`pos${i+1}`);
        await sleep(250);
    }

    actionScreen.classList.remove("prep");

}

async function actionEvent(question, answers, correctAns, screenNumber) {
    const screen = actionScreen.children[screenNumber];
    screen.classList.add(`pos${screenNumber+1}`);

    screen.children[0].innerText = question;
    screen.children[1].innerText = "";

    const newOrder = shuffle(order);
    const answersInOrder = copyInOrder(answers, newOrder);
    const functionsInOrder = [];
    
    const timer = setTimeout(
        () => {
            incorrect(timer, screenNumber);
            offButtons(true);
        }, 3000);

    for (let i = 0; i < answersInOrder.length; i++) {
        if (answersInOrder[i] === correctAns) {
            functionsInOrder.push(
                (e) => onClickHandler(e, correct, timer, screenNumber)
            );
        } else {
            functionsInOrder.push(
                (e) => onClickHandler(e, incorrect,timer, screenNumber)
            );
        }
    }   

    setButtons(answersInOrder, functionsInOrder);
    await sleep(4000);
}

function onClickHandler(e, f, timerID,screenNumber) {
    f(timerID, screenNumber);
    offButtons(true);
    console.log(e.target);
    e.target.removeEventListener("click", onClickHandler, false);
}

function incorrect(timerID, screenNumber) {
    clearTimeout(timerID);
    actionScreen.children[screenNumber].children[1].innerText = incReplicas[randomNum(incReplicas.length)];
    rep = true;
}

function correct(timerID, screenNumber) {
    clearTimeout(timerID);
    actionScreen.children[screenNumber].children[1].innerText = corReplicas[randomNum(corReplicas.length)];
    rep = false;
}

function copyInOrder(arr, order) {
    const ans = [];

    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[order[i]]);
    }

    return ans;
}

function shuffle(arr) {
    const ans = [];
    const items = {};

    while (ans.length < arr.length) {
        const rand = randomNum(arr.length);

        if (!(items[rand])) {
            items[rand] = true;
            ans.push(rand);
        }
    }

    return ans;
}


function setButtons(titles, functions) {
    input.innerHTML = "";

    for (let i = 0; i < titles.length; i++) {
        const button = document.createElement("button");

        button.disabled = false;
        button.innerText = titles[i];
        button.addEventListener("click", functions[i]);
        input.appendChild(button);
    }
}

function offButtons(state) {
   for(let i = 0; i < 4; i++) {
        input.children[i].disabled = state;
   } 
}
