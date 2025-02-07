document.addEventListener("DOMContentLoaded", main);

async function main() {
    
    alert("hi mate :)");
    await printReplica("The Unknown", "Welcome, dear ........., you have to answer the TRUTH. NO FUN HERE. IT IS NO JOKE. I warned you. K, gotta go, wish you luck...", "The Unknown", 100);
    await setCanvas("Main", "max");
    await printReplica("Main", "There once was a warrior,", "Taskmaster");
    await printReplica("Main", "That noone could match,");
    await printReplica("Main", "She rules as a nice and a mighty queen.");
    await printReplica("Main", "Yet once came the day and...");
    
    await printReplica("Main", "Who are you, young lady, to interrupt the speech of mine?", "Taskmaster")

    await showInput();
    await getUserName();
    await hideInput();

    await printReplica("Main", "WHO DO YOU THINK YOU ARE TO FOOL ME LIKE THAT?!? THERE IS NO WAY YOU... Yet, there is only one way to find out: GET YOUR KNOWLEDGE!", "Taskmaster");

    await setCanvas("Main", "mid");

    await printReplica("The Unknown", "This world has a different combat, than physical one. You have to fight with knowledge. Get ready!", "The Unknown");
    
    await setCanvas("Main", "max");
    
    await showInput();
    await game(questions, answers, correctAnswers);
    await hideInput();

    await printReplica("Main", "Oh, I'm sorry, Lady, for not recognising you at first...", "Taskmaster");
    await setCanvas("The Unknown", "big");
    await printReplica("The Unknown", "Congrats", "The Unknown");
    await sleep(2000);
    await printReplica("The Unknown", "hα2πy birthday", "myn0name")
}


