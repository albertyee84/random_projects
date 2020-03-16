import Deck from "./Deck";
import Player from "./Player";

class  Game {
    constructor() {
        this.deck = new Deck()
        this.deck.shuffleDeck()
        this.player = new Player();
        this.dealer = new Player();
    }

    dealCards() {
        const playerCard = this.deck.deal() //?
        this.player.takeCard(playerCard)
        const dealerCard = this.deck.deal() //?
        this.dealer.takeCard(dealerCard)
    }

    player() {
        return this.player;
    }

    dealer() {
        return this.dealer;
    }

}

const game = new Game()
game.dealCards()
game.dealCards()
game.player.currentValue() //?
game.player.currentHand() //?