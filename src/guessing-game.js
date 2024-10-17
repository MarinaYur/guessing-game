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
        this.guessNumber = Math.floor((this.max + this.min) / 2 + 0.5);
        return this.guessNumber;
    }

    lower() {
        return this.max = this.guessNumber;
    }

    greater() {
        return this.min = this.guessNumber;
    }
}

module.exports = GuessingGame;
