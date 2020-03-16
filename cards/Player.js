export default class Player {
    constructor() {
        this.hand = []
    }

    currentValue() {
        let value = 0;
        this.hand.forEach(card => {
            if(card.val === 1 && value < 12) {
                value += 10
            }
            value += card.val
        })
        return value;
    }

    currentHand() {
        return this.hand
    }

    takeCard(card) {
        this.hand.push(card)
    }
}

