document.addEventListener("DOMContentLoaded", main);

const canvases = {
    "The Unknown": document.getElementById("The Unknown"),
    "Main": document.getElementById("Main"),
}

const speech = `
    <div id="current" class="replica">
        <div class="name"></div>
        <div class="text"></div>
    </div>
    `;

function main() {
    printReplica("The Unknown", "hello, world", 100);
    alert("hi, mate");
}

function printReplica(character, text, delay) {
    const canvas = canvases[character];
    canvas.innerHTML += speech;
    const replica = document.getElementById("current");
    replica.children[0].innerHTML = character + ":";
   
    printText(replica.children[1], text, delay);
    
    replica.removeAttribute("id");
}

function printText(destination, text, delay, i=0) {    
    setTimeout(() => { 
        destination.innerHTML += text[i];
        if (i < text.length - 1) {
            printText(destination, text, delay,  i+1);
        }
    }, delay);
}
