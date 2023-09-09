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

// Define Deck class or object -- establishing what the suit and rank objects are 
class Deck { 
    constructor() {
        this.cards = []; 
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; 
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


// Create a Deck of 52 cards with different suits and rank 
for (const suit of suits) {
    for (const rank of ranks) {
        this.cards.push(new Card(suit,rank)); 
         }
    }
}
// Shuffle the cards in the deck using Fisher-Yates algorithm: 
shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + i)); 
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}

// Define Player class -- a player has a name, hand and score 
class Player {
    constructor(name) {
        this.name = name; 
        this.hand = hand; 
        this.score = 0; // each player starts with a score of zero 
    }

    // Remote and return the top card of the player's hand 
    flip() {
        return this.hand.pop(); 
    }
}