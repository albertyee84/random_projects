import Card from './Cards'

export default class Deck {
    constructor() {
        this.deck = []
        this.createDeck();
        this.shuffleDeck(this.deck)
    }

    createDeck() {
        for (let i = 1; i < 14; i++) {
            for (let j = 0; j < 4; j++) {
                let value = this.value(i);
                let suit = this.suit(j);
                let cardVal = this.cardName(i)
                this.deck.push(new Card(value, suit, cardVal))
            }
        }
    }

    value(val) {
        if(val > 10) {
            return 10
        } else {
            return val;
        }
    }

    cardName(val) {
        if(val === 1) {
            return 'Ace'
        } else if(val === 11) {
            return 'Jack'
        } else if (val === 12) {
            return 'Queen'
        } else if (val === 13) {
            return 'King'
        } else {
            return val.toString()
        }
    }

    suit(value) {
        switch(value) {
            case 0:
                return 'Diamonds'
            case 1:
                return 'Clubs'
            case 2:
                return 'Hearts'
            case 3:
                return 'Spades'
        }
    }

    deal() {
        return this.deck.shift()
    }

    cards() {
        return this.deck.length
    }

    shuffleDeck(array = this.deck) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

}


const deck = new Deck()
deck.cards() //?
deck.shuffleDeck()
deck.deal() //?