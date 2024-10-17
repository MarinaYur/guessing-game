class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessNumber = Math.random() * (this.max - this.min) + this.min;
        return this.guessNumber;
    }

    lower() {
        return this.min = this.guessNumber;
    }

    greater() {
        return this.max = this.guessNumber;
    }
}

module.exports = GuessingGame;
