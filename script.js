function startGame(){ 
    let begin = prompt("Do you want to play? if so, type 'yes' "); 
    if (begin == "yes" || begin == "Yes" || begin == "YES" ) { //check different ways of typing 'yes' 
        let name = prompt("What is your name?"); //prompt for name
        startCombat(name); //executes the startCombat function, passing in the user's name
    } else {
    console.log("You did not type 'yes' so nothing happens. Refresh the screen if you want to play!");
    }
}

startGame();

function startCombat(name){
    console.log(`your name is ${name}`);
    let userHP = 40;
    let botHP = 10;
    let userWins = 0; //keeps track of the user's wins
    keepPlaying = true; 

    function getDamage(){
        let damage = Math.floor(Math.random() * 5) + 1; // <<<< Thanks for the tip from part 1 Mishara!
        return damage; 
    }

    while ( userWins < 3 && keepPlaying === true ) { // loop runs until the user has won 3 times, and if the user wants to keepPlaying
        console.log(`${name} has ${userHP} health points left.`); 
        console.log(`Grant the Mighty Chicken has ${botHP} health points left.`);
        userHP -= getDamage(); //subtract user's health by 1 or 2 randomly
        botHP -= getDamage(); //subtract bot's health by 1 or 2 randomly




        //check if the user wants to keep playing
        keepPlayingPrompt = prompt ("Do you want to keep playing? if so, type 'Attack'")
        
        if (keepPlayingPrompt == "attack" || keepPlayingPrompt == "Attack" || keepPlayingPrompt == "ATTACK" ) { //check different ways of typing 'Attack'
            console.log("Attack begins!");
        } else if ( keepPlayingPrompt == "quit" || keepPlayingPrompt == "Quit" || keepPlayingPrompt == "QUIT" ) { //check different ways of typing 'Quit' ) {
            console.log("You quit the game early");
            keepPlaying = false;
            break;
        } else {
            console.log ("Invalid input, you did not type 'Attack or 'Quit'.. Closing game");
            keepPlaying = false;
            break;
        }
        
        if (userHP <= 0 && botHP <= 0){ //if they're both dead, it's a tie and the game ends
            console.log(`This round was a tie! ${name} had ${userHP} HP remaining, and Grant the Mighty Chicken had ${botHP} HP remaining.`)
            break;
        } else if (botHP <= 0 ) { //checks if the bot is dead
            console.log(`${name} won this round with ${userHP} HP remaining. Grant the Mighty Chicken had ${botHP} HP remaining`);
            userWins += 1;
            botHP = 10; //resets the bot's HP for the next round
        } else if (userHP <=0) { //checks if the user is dead
            console.log(`Grant the Mighty Chicken won this round with ${botHP} HP remaining. ${name} had ${userHP} HP remaining`)
            break;
        }
    }

    if ( userHP > 0 ) { //The game is over, check who won
        console.log(`Game over! ${name} won!`)
    } else if (botHP > 0 ) {
        console.log("Game over! Grant the Mighty Chicken won!")
    } else {
        console.log("Game over! it was a tie!")
    }
}
