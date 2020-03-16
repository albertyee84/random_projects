import Deck from "./Deck";
import Player from "./Player";

class  Game {
    constructor() {
        this.deck = new Deck()
        this.deck.shuffleDeck()
        this.player = new Player();
        this.dealer = new Player();
        this.currentPlayer = this.player;
    }

    initialDeal() {
        for (let i = 0; i < 2; i++ ) {
            this.dealCard(this.player)
            this.dealCard(this.dealer)
        }
    }

    dealCard(player) {
        const playerCard = this.deck.deal()
        player.takeCard(playerCard)
    }

    player() {
        return this.player;
    }

    dealer() {
        return this.dealer;
    }

    switchPlayer() {
        this.currentPlayer = this.dealer;
    }

    checkValue() {
        if(this.currentPlayer.currentValue() === 21) {
            return this.endGame(this.currentPlayer)
        } else if( this.currentPlayer.currentValue() > 21) {
            return this.bust()
        }
    }

    action(val) {
        switch(val) {
            case 'hit':
                this.dealCard(this.currentPlayer)
                this.checkValue()
            case 'stand':
                this.currentPlayer = this.dealer
        }
    }

    bust() {
        console.log(`busts`)
    }

    endGame(win) {
        if(win === this.player) {
            console.log('Player Wins!')
        } else if(win === this.dealer) {
            console.log('House Wins!')
        } else {
            console.log('Push')
        }
    }

}

const game = new Game()
game.initialDeal()
game.player.currentValue() //?
game.dealer.currentValue() //?