/*
For the final project you will be creating an automated version of the classic card game WAR! 
There are many versions of the game WAR. In this version there are only 2 players.
You do not need to do anything special when there is a tie in a round.
Think about how you would build this project and write your plan down. 
Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.

Deal 26 Cards to each Player from a Deck of 52 cards.
Iterate through the turns where each Player plays a Card.
The Player who played the higher card is awarded a point.
Ties result in zero points for both Players.
After all cards have been played, display the score and declare the winner.
Write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/ 

/* Define classes Card, Deck, and Player */ 

// Define Card class -- an object with a suit and a rank e.g. 2 of Hearts, 4 of Spades, Ace of Diamonds 
class Card { 
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;    
    }
}

// Define Deck class -- establishing what the suit and rank objects are 
class Deck { 
    constructor() {
        this.cards = []; 
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; 
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    }
}