export default class Card {
    constructor(val, suit, cardVal) {
        this.val = val;
        this.suit = suit;
        this.cardVal = cardVal
    }

    suit() {
        return this.suit;
    }

    val() {
        return this.val;
    }
    
    cardVal() {
        return this.cardVal;
    }
    
}