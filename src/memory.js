class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pickedCards = [];
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined;
    }
    for (let i = 0; i < this.cards.length; i++) {
      let temp = this.cards[i];
      let r = Math.floor(Math.random() * this.cards.length);
      this.cards[i] = this.cards[r];
    }
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else return false;

    // ... write your code here
  }

  checkIfFinished() {
    if (this.cards.length > 0) {
      return false;
    } else return true;
    // ... write your code here
  }
}
