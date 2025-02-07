document.addEventListener("DOMContentLoaded", main);


async function main() {
    
    alert("hi, mate");
    await printReplica("The Unknown", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 0);
    await setCanvas("Main", "mid");
    await printReplica("Main", "oh, hi there", 100);
    await setCanvas("Main", "max");

    await showInput();
    await game(questions, answers, correctAnswers);
    await hideInput();
}


